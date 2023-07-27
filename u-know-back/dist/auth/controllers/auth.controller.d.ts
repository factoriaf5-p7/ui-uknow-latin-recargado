import { AuthService } from '../services/auth.service';
import { Request } from 'express';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { UserService } from '../../user/user.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    signup(user: CreateUserDto): Promise<import("../../schemas/users.schema").User>;
    prueba(): void;
    login(req: Request): {
        access_token: string;
        name: string;
        wallet_balance: number;
    };
}
