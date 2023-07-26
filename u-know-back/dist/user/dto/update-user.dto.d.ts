import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<Omit<CreateUserDto, "name" | "password" | "email">>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    token: string;
}
export {};
