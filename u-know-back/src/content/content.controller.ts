import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
  Req,
  UseGuards,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from '../content/dto/create-content.dto';
import { Content } from '../schemas/content.schema';
import { UpdateContentDto } from './dto/update-content.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from '../auth/decorators/public.decorator';
import { Role } from '../auth/enums/role.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/role.guard';
import { AuthGuard } from '@nestjs/passport';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { RateContentDto } from './dto/rateContent.dto';
import { UserService } from '../user/user.service';

@ApiTags('content')
@UseGuards(JwtAuthGuard, RolesGuard)
//@Roles(Role.User)
@Controller('content')
export class ContentController {
  constructor(
    private readonly contentService: ContentService,
    private readonly userService: UserService,
  ) {}

  //ALLOW REGISTERED USERS TO CREATE CONTENT
  @Roles(Role.User)
  @Post(':userId')
  createContent(
    @Param('userId') userId,
    @Body() contentDto: CreateContentDto,
  ): Promise<Content> {
    return this.contentService.createContent(contentDto, userId);
  }

  //ALLOW USERS TO SEE THE CONTENT THEY HAVE CREATED
  @Roles(Role.User)
  @Get('user/:userId')
  findUserContent(@Param('userId') userId: string): Promise<Content[]> {
    return this.contentService.findUserContent(userId);
  }

  //
  @Roles(Role.User)
  @Get()
  findAll(@Req() req: any) {
    console.log(req.user, 'user?');
    return this.contentService.findAll();
  }

  //ALLOW USERS TO VIEW CONTENT BY ID
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentService.findOne(id);
  }

  //ALLOW REGISTERED USERS TO UPDATE CONTENT
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return this.contentService.update(id, updateContentDto);
  }

  //ALLOW REGISTERED USERS TO DELETE CONTENT
  @Delete(':id')
  delete(@Req() req, @Param('id') id: string) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    return this.contentService.delete(id, token);
  }

  //permitir que los usuarios registrados compren contenido
  @Post(':id/buy/:contentId')
  async buyContent(
    @Param('id') id: string,
    @Param('contentId') contentId: string,
  ) {
    const user = await this.userService.findOne(id); // Buscar el usuario por id
    const content = await this.contentService.findOne(contentId); // Buscar el contenido por id

    if (!user) {
      // Si el usuario no existe, lanzar un error
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    if (!content) {
      // Si el contenido no existe, lanzar un error
      throw new HttpException('Content not found', HttpStatus.NOT_FOUND);
    }

    if (user.wallet_balance < content.price) {
      // Si el usuario no tiene suficiente dinero, lanzar un error
      throw new HttpException('Insufficient balance', HttpStatus.BAD_REQUEST);
    }

    user.wallet_balance -= content.price; // Restar el precio del contenido de la billetera del usuario

    // Guardar los cambios en el usuario
    await user.save();
    this.contentService.buyContent(user._id, content._id);
    return 'Content purchased successfully';
  }
  //permitir que los usuarios registrados vean el contenido que han comprado
  @Get(':id/boughtContent')
  getBoughtContent(@Param('id') id: string) {
    return this.contentService.getBoughtContent(id);
  }
  //permitir que los usuarios comenten
  @Post(':id/comment')
  async addComment(@Param('id') id: string, @Body() comment: CreateCommentDto) {
    return await this.contentService.addComment(id, comment);
  }

  @Post(':id/rate')
  async rateContent(
    @Param('id') id: string,
    @Body() rateContentDto: RateContentDto,
  ): Promise<Content> {
    // Llamar a la función de validación y verificación del rating en el servicio
    if (!rateContentDto.rating || isNaN(Number(rateContentDto.rating))) {
      throw new HttpException('Invalid rating value', HttpStatus.BAD_REQUEST);
    }
    // Llamar al servicio solo si la validación es exitosa
    return this.contentService.rateContent(id, rateContentDto);
  }
  @Public()
  @Get('search/content')
  async searchContent(@Query('query') query: string) {
    try {
      const searchResults = await this.contentService.searchContent(query);
      return searchResults;
    } catch (error) {
      throw new HttpException(
        'Error al realizar la búsqueda',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
