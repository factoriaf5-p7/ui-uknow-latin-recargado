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
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Content, ContentDocument } from '../schemas/content.schema';
import { User } from '../schemas/users.schema';
import { CreateContentDto } from '../content/dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { RateContentDto } from './dto/rateContent.dto';
import { JwtService } from '@nestjs/jwt';
export declare class ContentService {
    private readonly contentModel;
    private readonly userModel;
    private readonly jwtService;
    constructor(contentModel: Model<Content>, userModel: Model<User>, jwtService: JwtService);
    createContent(createContentDto: CreateContentDto, _id: string): Promise<Content>;
    findUserContent(userId: string): Promise<Content[]>;
    findAll(): Promise<Content[]>;
    findOne(id: string): Promise<Content>;
    update(id: string, updateContentDto: UpdateContentDto): Promise<import("mongoose").Document<unknown, {}, Content> & Content & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string, token: string): Promise<{
        message: string;
    }>;
    buyContent(id: string, contentId: string): Promise<import("mongoose").Document<unknown, {}, Content> & Content & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getBoughtContent(id: string): Promise<Content[]>;
    addComment(_id: string, comment: any): Promise<import("mongoose").Document<unknown, {}, Content> & Content & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    rateContent(id: string, rateContentDto: RateContentDto): Promise<ContentDocument>;
}
