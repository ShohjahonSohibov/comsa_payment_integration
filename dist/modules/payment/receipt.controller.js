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
exports.ReceiptController = void 0;
const common_1 = require("@nestjs/common");
const receipt_service_1 = require("./receipt.service");
const create_receipt_dto_1 = require("./dto/create-receipt.dto");
const swagger_1 = require("@nestjs/swagger");
const auth_decorator_1 = require("../../decorator/auth.decorator");
const web_pay_receipt_dto_1 = require("./dto/web-pay-receipt.dto");
const web_verify_receipt_dto_1 = require("./dto/web-verify-receipt.dto");
const hold_receipt_dto_1 = require("./dto/hold-receipt.dto");
const status_receipt_dto_1 = require("./dto/status-receipt.dto");
const reverse_receipt_dto_1 = require("./dto/reverse-receipt.dto");
let ReceiptController = exports.ReceiptController = class ReceiptController {
    constructor(receiptService) {
        this.receiptService = receiptService;
    }
    createReceipt(createReceiptDto) {
        return this.receiptService.createReceipt(createReceiptDto);
    }
    webPayReceipt(webPayReceiptDto) {
        return this.receiptService.webPayReceipt(webPayReceiptDto);
    }
    webVerifyReceipt(webVerifyReceiptDto) {
        return this.receiptService.webVerifyReceipt(webVerifyReceiptDto);
    }
    holdReceipt(holdReceiptDto) {
        return this.receiptService.holdReceipt(holdReceiptDto);
    }
    statusReceipt(statusReceiptDto) {
        return this.receiptService.statusReceipt(statusReceiptDto);
    }
    reverseReceipt(reverseReceiptDto) {
        return this.receiptService.reverseReceipt(reverseReceiptDto);
    }
};
__decorate([
    (0, auth_decorator_1.Public)(),
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a receipt' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_receipt_dto_1.CreateReceiptDto]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "createReceipt", null);
__decorate([
    (0, auth_decorator_1.Public)(),
    (0, common_1.Post)('web-pay'),
    (0, swagger_1.ApiOperation)({ summary: 'Web pay receipt' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [web_pay_receipt_dto_1.WebPayReceiptDto]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "webPayReceipt", null);
__decorate([
    (0, auth_decorator_1.Public)(),
    (0, common_1.Post)('web-verify'),
    (0, swagger_1.ApiOperation)({ summary: 'Web verify receipt' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [web_verify_receipt_dto_1.WebVerifyReceiptDto]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "webVerifyReceipt", null);
__decorate([
    (0, auth_decorator_1.Public)(),
    (0, common_1.Post)('hold'),
    (0, swagger_1.ApiOperation)({ summary: 'Hold receipt' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hold_receipt_dto_1.HoldReceiptDto]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "holdReceipt", null);
__decorate([
    (0, auth_decorator_1.Public)(),
    (0, common_1.Post)('status'),
    (0, swagger_1.ApiOperation)({ summary: 'Get status of a receipt' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [status_receipt_dto_1.StatusReceiptDto]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "statusReceipt", null);
__decorate([
    (0, auth_decorator_1.Public)(),
    (0, common_1.Put)('reverse'),
    (0, swagger_1.ApiOperation)({ summary: 'Reverse a receipt' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reverse_receipt_dto_1.ReverseReceiptDto]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "reverseReceipt", null);
exports.ReceiptController = ReceiptController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('payment'),
    (0, common_1.Controller)('payment'),
    __metadata("design:paramtypes", [receipt_service_1.ReceiptService])
], ReceiptController);
//# sourceMappingURL=receipt.controller.js.map