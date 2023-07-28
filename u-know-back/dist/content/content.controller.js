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
exports.ContentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const content_service_1 = require("./content.service");
const create_content_dto_1 = require("../content/dto/create-content.dto");
const update_content_dto_1 = require("./dto/update-content.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const public_decorator_1 = require("../auth/decorators/public.decorator");
const role_enum_1 = require("../auth/enums/role.enum");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const role_guard_1 = require("../auth/guards/role.guard");
const create_comment_dto_1 = require("../dto/create-comment.dto");
const rateContent_dto_1 = require("./dto/rateContent.dto");
const user_service_1 = require("../user/user.service");
let ContentController = exports.ContentController = class ContentController {
    constructor(contentService, userService) {
        this.contentService = contentService;
        this.userService = userService;
    }
    createContent(userId, contentDto) {
        return this.contentService.createContent(contentDto, userId);
    }
    findUserContent(userId) {
        return this.contentService.findUserContent(userId);
    }
    findAll(req) {
        console.log(req.user, 'user?');
        return this.contentService.findAll();
    }
    findOne(id) {
        return this.contentService.findOne(id);
    }
    update(id, updateContentDto) {
        return this.contentService.update(id, updateContentDto);
    }
    delete(req, id) {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
        return this.contentService.delete(id, token);
    }
    async buyContent(id, contentId) {
        const user = await this.userService.findOne(id);
        const content = await this.contentService.findOne(contentId);
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!content) {
            throw new common_1.HttpException('Content not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (user.wallet_balance < content.price) {
            throw new common_1.HttpException('Insufficient balance', common_1.HttpStatus.BAD_REQUEST);
        }
        user.wallet_balance -= content.price;
        await user.save();
        return 'Content purchased successfully';
    }
    getBoughtContent(id) {
        return this.contentService.getBoughtContent(id);
    }
    async addComment(id, comment) {
        return await this.contentService.addComment(id, comment);
    }
    async rateContent(id, rateContentDto) {
        if (!rateContentDto.rating || isNaN(Number(rateContentDto.rating))) {
            throw new common_1.HttpException('Invalid rating value', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.contentService.rateContent(id, rateContentDto);
    }
    async searchContent(query) {
        try {
            const searchResults = await this.contentService.searchContent(query);
            return searchResults;
        }
        catch (error) {
            throw new common_1.HttpException('Error al realizar la búsqueda', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Post)(':userId'),
    openapi.ApiResponse({ status: 201, type: require("../schemas/content.schema").Content }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_content_dto_1.CreateContentDto]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "createContent", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/content.schema").Content] }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "findUserContent", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.User),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/content.schema").Content] }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../schemas/content.schema").Content }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_content_dto_1.UpdateContentDto]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':id/buy/:contentId'),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('contentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "buyContent", null);
__decorate([
    (0, common_1.Get)(':id/boughtContent'),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/content.schema").Content] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "getBoughtContent", null);
__decorate([
    (0, common_1.Post)(':id/comment'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "addComment", null);
__decorate([
    (0, common_1.Post)(':id/rate'),
    openapi.ApiResponse({ status: 201, type: require("../schemas/content.schema").Content }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, rateContent_dto_1.RateContentDto]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "rateContent", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('search/content'),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/content.schema").Content] }),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "searchContent", null);
exports.ContentController = ContentController = __decorate([
    (0, swagger_1.ApiTags)('content'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Controller)('content'),
    __metadata("design:paramtypes", [content_service_1.ContentService,
        user_service_1.UserService])
], ContentController);
//# sourceMappingURL=content.controller.js.map