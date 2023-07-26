/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ContentService } from './content.service';
import { CreateContentDto } from '../content/dto/create-content.dto';
import { Content } from '../schemas/content.schema';
import { UpdateContentDto } from './dto/update-content.dto';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { RateContentDto } from './dto/rateContent.dto';
import { UserService } from '../user/user.service';
export declare class ContentController {
    private readonly contentService;
    private readonly userService;
    constructor(contentService: ContentService, userService: UserService);
    createContent(userId: any, contentDto: CreateContentDto): Promise<Content>;
    findUserContent(userId: string): Promise<Content[]>;
    findAll(req: any): Promise<Content[]>;
    findOne(id: string): Promise<Content>;
    update(id: string, updateContentDto: UpdateContentDto): Promise<import("mongoose").Document<unknown, {}, Content> & Content & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(req: any, id: string): Promise<{
        message: string;
    }>;
    buyContent(id: string, contentId: string): Promise<string>;
    getBoughtContent(id: string): Promise<Content[]>;
    addComment(id: string, comment: CreateCommentDto): Promise<import("mongoose").Document<unknown, {}, Content> & Content & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    rateContent(id: string, rateContentDto: RateContentDto): Promise<Content>;
}
