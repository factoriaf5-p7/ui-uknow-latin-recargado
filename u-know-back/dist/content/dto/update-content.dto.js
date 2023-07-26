"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContentDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_content_dto_1 = require("./create-content.dto");
class UpdateContentDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(create_content_dto_1.CreateContentDto, ['sales', 'price', 'author_id'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateContentDto = UpdateContentDto;
//# sourceMappingURL=update-content.dto.js.map