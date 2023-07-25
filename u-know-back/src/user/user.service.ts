import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel, getModelToken } from '@nestjs/mongoose';
import { User } from '../schemas//users.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService, // Inject JwtService
  ) {}

  //REGISTER A NEW USER
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      console.log(createUserDto);
      const createdUser = await this.userModel.create(createUserDto);

      // Assign initial balance to the wallet (assuming you have a wallet schema)
      const initialBalance = 1000;
      createdUser.wallet_balance = initialBalance;
      await createdUser.save();
      return createdUser;
    } catch (error) {
      if (error.code === 11000) {
        throw new HttpException(
          'Email or username already exists',
          HttpStatus.CONFLICT,
        );
      }
    }
  }

  //SEARCH ALL USER
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  //SEARCH USER BY ID
  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).exec();
  }

  //USER UPDATE
  async update(id: string, updateUserDto: UpdateUserDto, token: string) {
    const user = await this.userModel.findById(id);
    console.log(token, 'dsdsdsd');
    if (!user) {
      throw new HttpException('User not Found', HttpStatus.BAD_REQUEST);
    }

    // Verify if the user making the request is the owner of the account
    const decodedToken = this.jwtService.verify(token); // Verify the JWT token
    if (user.id !== decodedToken.sub) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    Object.assign(user, updateUserDto);

    const updatedUser = await user.save();
    return updatedUser;
  }

  //USER DELETE
  async delete(id: string) {
    const deletedUser = await this.userModel
      .findByIdAndRemove({ _id: id })
      .exec();
    if (!deletedUser) {
      throw new HttpException('User not Found', HttpStatus.BAD_REQUEST);
    }
    return deletedUser;
  }
}
