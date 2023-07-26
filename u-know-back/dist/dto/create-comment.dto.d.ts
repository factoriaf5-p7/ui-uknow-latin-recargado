import { User } from '../schemas/users.schema';
export declare class CreateCommentDto {
    readonly title: string;
    readonly comment: string;
    readonly username: User;
}
