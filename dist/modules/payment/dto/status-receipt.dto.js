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
exports.StatusReceiptDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class StatusReceiptDto {
}
exports.StatusReceiptDto = StatusReceiptDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'JSON-RPC version',
        example: '2.0',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StatusReceiptDto.prototype, "jsonrpc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Method of the receipt',
        example: 'receipt.status',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StatusReceiptDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the receipt',
        example: 2,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], StatusReceiptDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Params of the receipt',
    }),
    __metadata("design:type", Object)
], StatusReceiptDto.prototype, "params", void 0);
//# sourceMappingURL=status-receipt.dto.js.map