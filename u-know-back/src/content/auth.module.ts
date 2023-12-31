import { Module } from '@nestjs/common';
import { AuthService } from '../auth/services/auth.service';
import { AuthController } from '../auth/controllers/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schemas/users.schema';
import { LocalStrategy } from '../auth/strategies/local.strategy';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET', 'dsds'),
          signOptions: {
            expiresIn: '10d',
          },
        };
      },
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UserService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AuthModule {}
