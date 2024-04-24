import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { DateSchema } from 'src/generic/schema/date.schema';

export type ReceiptDocument = HydratedDocument<Receipt>;

@Schema()
export class Receipt extends DateSchema {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  agent: string;

  @Prop({ required: true, type: SchemaTypes.Mixed })
  receipt: {
    id: string;
    amount: number;
    card: string | { hash: string; masked_pan: string; expire: string; status: number; full_name: string; card_type: number; processing: string };
    state: string;
    created_at: number;
    paid_at: number;
    canceled_at: number;
    operations?: { operation_type: string; id: string; processing: string }[];
    product: { key: string };
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


export const ReceiptSchema = SchemaFactory.createForClass(Receipt);
