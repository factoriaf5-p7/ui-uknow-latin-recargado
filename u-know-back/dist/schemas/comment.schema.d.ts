import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './users.schema';
import { Document } from 'mongoose';
export type CommentDocument = HydratedDocument<Comment>;
export declare class Comment extends Document {
    title: string;
    comment: string;
    username: User;
}
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, mongoose.Document<unknown, any, Comment> & Comment & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Comment, mongoose.Document<unknown, {}, Comment> & Comment & {
    _id: mongoose.Types.ObjectId;
}>;
