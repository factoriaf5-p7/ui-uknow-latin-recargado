export declare class CreateUserDto {
    name: string;
    user_name: string;
    password: string;
    email: string;
    wallet_balance: number;
    id_published_content: number[];
    id_bought_content: number[];
    created_at?: Date;
    created_update?: Date;
    roles?: string[];
}
