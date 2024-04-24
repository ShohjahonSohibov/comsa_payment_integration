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
import { HydratedDocument } from 'mongoose';
import { DateSchema } from 'src/generic/schema/date.schema';
export type ReceiptDocument = HydratedDocument<Receipt>;
export declare class Receipt extends DateSchema {
    id: number;
    agent: string;
    receipt: {
        id: string;
        amount: number;
        card: string | {
            hash: string;
            masked_pan: string;
            expire: string;
            status: number;
            full_name: string;
            card_type: number;
            processing: string;
        };
        state: string;
        created_at: number;
        paid_at: number;
        canceled_at: number;
        operations?: {
            operation_type: string;
            id: string;
            processing: string;
        }[];
        product: {
            key: string;
        };
        details: any;
        commission: number;
    };
}
export interface WebPayReceiptRequest {
    jsonrpc: string;
    method: string;
    id: number;
    params: {
        receipt_id: string;
        card: {
            pan: string;
            expire: string;
        };
    };
}
export interface WebVerifyReceiptRequest {
    jsonrpc: string;
    method: string;
    id: number;
    params: {
        receipt_id: string;
        otp: string;
    };
}
export interface HoldReceiptRequest {
    jsonrpc: string;
    method: string;
    id: number;
    params: {
        receipt_id: string;
        action: string;
    };
}
export interface StatusReceiptRequest {
    jsonrpc: string;
    method: string;
    id: number;
    params: {
        receipt_id: string;
    };
}
export interface ReverseReceiptRequest {
    jsonrpc: string;
    method: string;
    id: number;
    params: {
        receipt_id: string;
        reason: string;
    };
}
export declare const ReceiptSchema: import("mongoose").Schema<Receipt, import("mongoose").Model<Receipt, any, any, any, import("mongoose").Document<unknown, any, Receipt> & Receipt & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Receipt, import("mongoose").Document<unknown, {}, Receipt> & Receipt & {
    _id: import("mongoose").Types.ObjectId;
}>;
