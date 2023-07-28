"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const content_schema_1 = require("../schemas/content.schema");
const jwt_1 = require("@nestjs/jwt");
let ContentService = exports.ContentService = class ContentService {
    constructor(contentModel, userModel, jwtService) {
        this.contentModel = contentModel;
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async createContent(createContentDto, _id) {
        const createdContent = await this.contentModel.create(Object.assign(Object.assign({}, createContentDto), { price: 10, author_id: _id }));
        const user = await this.userModel.findById({ _id });
        console.log(user, 'service');
        const createdContentId = createdContent._id;
        await this.userModel.updateOne({ _id: user._id }, {
            $push: { id_published_content: { createdContentId } },
        });
        await createdContent.save();
        await user.save();
        return createdContent;
    }
    async findUserContent(userId) {
        return this.contentModel.find({ author_id: userId }).exec();
    }
    async findAll() {
        return this.contentModel.find().sort({ averagerating: 1 }).exec();
    }
    async findOne(id) {
        return this.contentModel.findOne({ _id: id }).exec();
    }
    async update(id, updateContentDto) {
        const content = await this.contentModel.findById(id);
        if (!content) {
            throw new common_1.HttpException('Content not Found', common_1.HttpStatus.BAD_REQUEST);
        }
        Object.assign(content, updateContentDto);
        const updateContent = await content.save();
        return updateContent;
    }
    async delete(id, token) {
        const content = await this.contentModel.findById(id).exec();
        const decodedToken = this.jwtService.verify(token);
        console.log(decodedToken, 'decodedToken');
        if (!content) {
            throw new common_1.HttpException('Content not Found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (content.sales) {
            throw new common_1.HttpException('Content cannot be deleted as it has been purchased', common_1.HttpStatus.FORBIDDEN);
        }
        if (content.author_id !== decodedToken.sub) {
            throw new common_1.HttpException('You do not have permission to delete this content', common_1.HttpStatus.FORBIDDEN);
        }
        const deletedContent = await this.contentModel
            .findByIdAndRemove({ _id: id })
            .exec();
        if (!deletedContent) {
            throw new common_1.HttpException('Content not Found', common_1.HttpStatus.BAD_REQUEST);
        }
        return { message: 'Content deleted successfully' };
    }
    async buyContent(id, contentId) {
        const content = await this.contentModel.findById(contentId);
        if (!content) {
            throw new common_1.HttpException('Content not Found', common_1.HttpStatus.NOT_FOUND);
        }
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new common_1.HttpException('User not Found', common_1.HttpStatus.NOT_FOUND);
        }
        if (user.id_bought_content.includes(contentId)) {
            throw new common_1.HttpException('Content already purchased', common_1.HttpStatus.CONFLICT);
        }
        user.id_bought_content.push(contentId);
        await user.save();
        content.sales = true;
        await content.save();
        return content;
    }
    async getBoughtContent(id) {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        const boughtContent = await this.contentModel.find({
            _id: { $in: user.id_bought_content },
        });
        return boughtContent;
    }
    async addComment(_id, comment) {
        const contentComment = await this.contentModel.findById(_id);
        contentComment.comments.push(comment);
        contentComment.save();
        return contentComment;
    }
    async rateContent(id, rateContentDto) {
        var _a, _b;
        const content = await this.contentModel.findById(id);
        if (!content) {
            throw new common_1.NotFoundException('Content not found');
        }
        if (!rateContentDto.rating || isNaN(Number(rateContentDto.rating))) {
            throw new common_1.HttpException('Invalid rating value', common_1.HttpStatus.BAD_REQUEST);
        }
        const newRating = Number(rateContentDto.rating);
        const totalRatings = (_b = (_a = content.ratings) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        const updatedRatings = [...content.ratings, newRating];
        let newAverageRating;
        if (totalRatings < 4) {
            if (newRating >= 4.8) {
                newAverageRating =
                    (content.averageRating * (totalRatings >= 4 ? 4 : totalRatings) +
                        newRating) /
                        (totalRatings + 1);
            }
            else {
                newAverageRating = content.averageRating;
            }
        }
        else {
            newAverageRating =
                (content.averageRating * (totalRatings - 4) + newRating) /
                    (totalRatings - 3);
        }
        content.ratings = updatedRatings;
        content.averageRating = isNaN(newAverageRating)
            ? newRating
            : newAverageRating;
        if (content.averageRating <= 3) {
            content.price = content.price * 0.9;
        }
        await content.save();
        return content;
    }
    async searchContent(query) {
        const regexQuery = new RegExp(query, 'i');
        const searchResults = await this.contentModel.find({
            $or: [{ title: regexQuery }, { content: regexQuery }],
        });
        return searchResults;
    }
};
exports.ContentService = ContentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(content_schema_1.Content.name)),
    __param(1, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        jwt_1.JwtService])
], ContentService);
//# sourceMappingURL=content.service.js.map