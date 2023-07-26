"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const content_controller_1 = require("./content.controller");
const content_service_1 = require("./content.service");
const content_schema_1 = require("../schemas/content.schema");
const user_module_1 = require("../user/user.module");
const users_schema_1 = require("../schemas/users.schema");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let ContentModule = exports.ContentModule = class ContentModule {
};
exports.ContentModule = ContentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            jwt_1.JwtModule.registerAsync({
                useFactory: (configService) => {
                    return {
                        secret: configService.get('JWT_SECRET', 'dsds'),
                        signOptions: {
                            expiresIn: '10d',
                        },
                    };
                },
                inject: [config_1.ConfigService],
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Content',
                    schema: content_schema_1.ContentSchema,
                },
                {
                    name: 'User',
                    schema: users_schema_1.UserSchema,
                },
            ]),
        ],
        controllers: [content_controller_1.ContentController],
        providers: [content_service_1.ContentService],
    })
], ContentModule);
//# sourceMappingURL=content.module.js.map