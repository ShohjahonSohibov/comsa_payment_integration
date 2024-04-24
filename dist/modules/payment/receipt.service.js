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
exports.ReceiptService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const receipt_schema_1 = require("./schema/receipt.schema");
const mongoose_2 = require("mongoose");
const axios_1 = require("axios");
let ReceiptService = exports.ReceiptService = class ReceiptService {
    constructor(receiptModel) {
        this.receiptModel = receiptModel;
    }
    async createReceipt(createReceiptDto) {
        try {
            const response = await axios_1.default.post('https://8244f62d-064d-4b0f-8173-5193c4d0d563.mock.pstmn.io/', createReceiptDto, {
                headers: {
                    'x-mock-response-name': 'receipt.create'
                }
            });
            const createdReceipt = new this.receiptModel({
                id: response.data.id,
                agent: response.data.result.agent,
                receipt: response.data.result.receipt,
            });
            return createdReceipt.save();
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    async webPayReceipt(webPayReceiptDto) {
        try {
            const response = await axios_1.default.post('https://8244f62d-064d-4b0f-8173-5193c4d0d563.mock.pstmn.io/', webPayReceiptDto, {
                headers: {
                    'x-mock-response-name': 'receipt.web.pay'
                }
            });
            const existingReceipt = await this.receiptModel.findOne({ id: response.data.id });
            if (existingReceipt) {
                existingReceipt.agent = response.data.result.agent;
                existingReceipt.receipt = response.data.result.receipt;
                return existingReceipt.save();
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async webVerifyReceipt(webVerifyReceiptDto) {
        try {
            const response = await axios_1.default.post('https://8244f62d-064d-4b0f-8173-5193c4d0d563.mock.pstmn.io/', webVerifyReceiptDto, {
                headers: {
                    'x-mock-response-name': 'receipt.web.verify'
                }
            });
            const existingReceipt = await this.receiptModel.findOne({ id: response.data.id });
            if (existingReceipt) {
                existingReceipt.agent = response.data.result.agent;
                existingReceipt.receipt = response.data.result.receipt;
                return existingReceipt.save();
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async holdReceipt(holdReceiptDto) {
        try {
            const response = await axios_1.default.post('https://8244f62d-064d-4b0f-8173-5193c4d0d563.mock.pstmn.io/', holdReceiptDto, {
                headers: {
                    'x-mock-response-name': 'receipt.hold'
                }
            });
            const existingReceipt = await this.receiptModel.findOne({ id: response.data.id });
            if (existingReceipt) {
                existingReceipt.agent = response.data.result.agent;
                existingReceipt.receipt = response.data.result.receipt;
                return existingReceipt.save();
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async statusReceipt(statusReceiptDto) {
        try {
            const response = await axios_1.default.post('https://8244f62d-064d-4b0f-8173-5193c4d0d563.mock.pstmn.io/', statusReceiptDto, {
                headers: {
                    'x-mock-response-name': 'receipt.status'
                }
            });
            const existingReceipt = await this.receiptModel.findOne({ id: response.data.id });
            if (existingReceipt) {
                existingReceipt.agent = response.data.result.agent;
                existingReceipt.receipt = response.data.result.receipt;
                return existingReceipt.save();
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async reverseReceipt(reverseReceiptDto) {
        try {
            const response = await axios_1.default.post('https://8244f62d-064d-4b0f-8173-5193c4d0d563.mock.pstmn.io/', reverseReceiptDto, {
                headers: {
                    'x-mock-response-name': 'receipt.reverse'
                }
            });
            const existingReceipt = await this.receiptModel.findOne({ id: response.data.id });
            if (existingReceipt) {
                existingReceipt.agent = response.data.result.agent;
                existingReceipt.receipt = response.data.result.receipt;
                return existingReceipt.save();
            }
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.ReceiptService = ReceiptService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(receipt_schema_1.Receipt.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReceiptService);
//# sourceMappingURL=receipt.service.js.map