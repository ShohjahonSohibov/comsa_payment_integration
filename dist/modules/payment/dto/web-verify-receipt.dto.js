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
exports.WebVerifyReceiptDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class WebVerifyReceiptDto {
}
exports.WebVerifyReceiptDto = WebVerifyReceiptDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the receipt',
        example: 123,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], WebVerifyReceiptDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'JSON-RPC version',
        example: '2.0',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], WebVerifyReceiptDto.prototype, "jsonrpc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Method of the receipt',
        example: 'receipt.web.verify',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], WebVerifyReceiptDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Params of the receipt',
    }),
    __metadata("design:type", Object)
], WebVerifyReceiptDto.prototype, "params", void 0);
//# sourceMappingURL=web-verify-receipt.dto.js.map