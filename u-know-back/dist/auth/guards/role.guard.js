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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = exports.ROLES_KEY = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const user_service_1 = require("../../user/user.service");
exports.ROLES_KEY = 'roles';
let RolesGuard = exports.RolesGuard = class RolesGuard {
    constructor(reflector, userService) {
        this.reflector = reflector;
        this.userService = userService;
    }
    async canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(exports.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        console.log(requiredRoles, 'rroles');
        try {
            if (!requiredRoles) {
                return true;
            }
            const { user } = context.switchToHttp().getRequest();
            const foundUser = await this.userService.findOne(user.sub);
            const hasRequiredRoles = foundUser.roles.some((role) => requiredRoles.includes(role));
            if (!hasRequiredRoles) {
                throw new common_1.ForbiddenException('You do not have permissions');
            }
            return true;
        }
        catch (error) {
            throw new common_1.ForbiddenException(`error ${error}`);
        }
    }
};
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector, user_service_1.UserService])
], RolesGuard);
//# sourceMappingURL=role.guard.js.map