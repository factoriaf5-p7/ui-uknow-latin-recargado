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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const users_schema_1 = require("../schemas//users.schema");
const mongoose_2 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
let UserService = exports.UserService = class UserService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        try {
            console.log(createUserDto);
            const createdUser = await this.userModel.create(createUserDto);
            const initialBalance = 1000;
            createdUser.wallet_balance = initialBalance;
            await createdUser.save();
            return createdUser;
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.HttpException('Email or username already exists', common_1.HttpStatus.CONFLICT);
            }
        }
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findOne(id) {
        return this.userModel.findOne({ _id: id }).exec();
    }
    async update(id, updateUserDto, token) {
        const user = await this.userModel.findById(id);
        console.log(token, 'dsdsdsd');
        if (!user) {
            throw new common_1.HttpException('User not Found', common_1.HttpStatus.BAD_REQUEST);
        }
        const decodedToken = this.jwtService.verify(token);
        if (user.id !== decodedToken.sub) {
            throw new common_1.HttpException('Unauthorized', common_1.HttpStatus.UNAUTHORIZED);
        }
        Object.assign(user, updateUserDto);
        const updatedUser = await user.save();
        return updatedUser;
    }
    async delete(id) {
        const deletedUser = await this.userModel
            .findByIdAndRemove({ _id: id })
            .exec();
        if (!deletedUser) {
            throw new common_1.HttpException('User not Found', common_1.HttpStatus.BAD_REQUEST);
        }
        return deletedUser;
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map