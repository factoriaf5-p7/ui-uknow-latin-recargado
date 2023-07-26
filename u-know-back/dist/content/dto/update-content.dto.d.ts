import { CreateContentDto } from './create-content.dto';
declare const UpdateContentDto_base: import("@nestjs/common").Type<Partial<Omit<CreateContentDto, "author_id" | "price" | "sales">>>;
export declare class UpdateContentDto extends UpdateContentDto_base {
}
export {};
