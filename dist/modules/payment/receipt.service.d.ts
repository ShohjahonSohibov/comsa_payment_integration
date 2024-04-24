/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { Receipt } from './schema/receipt.schema';
import { Model } from 'mongoose';
import { WebPayReceiptDto } from './dto/web-pay-receipt.dto';
import { WebVerifyReceiptDto } from './dto/web-verify-receipt.dto';
import { HoldReceiptDto } from './dto/hold-receipt.dto';
import { StatusReceiptDto } from './dto/status-receipt.dto';
import { ReverseReceiptDto } from './dto/reverse-receipt.dto';
export declare class ReceiptService {
    private receiptModel;
    constructor(receiptModel: Model<Receipt>);
    createReceipt(createReceiptDto: CreateReceiptDto): Promise<import("mongoose").Document<unknown, {}, Receipt> & Receipt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    webPayReceipt(webPayReceiptDto: WebPayReceiptDto): Promise<import("mongoose").Document<unknown, {}, Receipt> & Receipt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    webVerifyReceipt(webVerifyReceiptDto: WebVerifyReceiptDto): Promise<import("mongoose").Document<unknown, {}, Receipt> & Receipt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    holdReceipt(holdReceiptDto: HoldReceiptDto): Promise<import("mongoose").Document<unknown, {}, Receipt> & Receipt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    statusReceipt(statusReceiptDto: StatusReceiptDto): Promise<import("mongoose").Document<unknown, {}, Receipt> & Receipt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    reverseReceipt(reverseReceiptDto: ReverseReceiptDto): Promise<import("mongoose").Document<unknown, {}, Receipt> & Receipt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
