import { Injectable } from '@nestjs/common';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Receipt, ReceiptSchema, WebVerifyReceiptRequest } from './schema/receipt.schema';
import { Model } from 'mongoose';
import { WebPayReceiptDto } from './dto/web-pay-receipt.dto';
import { WebVerifyReceiptDto } from './dto/web-verify-receipt.dto';
import { HoldReceiptDto } from './dto/hold-receipt.dto';
import { StatusReceiptDto } from './dto/status-receipt.dto';
import axios from 'axios';
import { ReverseReceiptDto } from './dto/reverse-receipt.dto';
@Injectable()
export class ReceiptService {
  constructor(
    @InjectModel(Receipt.name) private receiptModel: Model<Receipt>,
  ) { }

  async createReceipt(createReceiptDto: CreateReceiptDto) {
    try {
      const response = await axios.post('https://8244f62d-064d-4b0f-8173-5193c4d0d563.mock.pstmn.io/', createReceiptDto, {
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
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async webPayReceipt(webPayReceiptDto: WebPayReceiptDto) {
    try {
      const response = await axios.post('https://8244f62d-064d-4b0f-8173-5193c4d0d563.mock.pstmn.io/', webPayReceiptDto, {
        headers: {
          'x-mock-response-name': 'receipt.web.pay'
        }
      });

      const existingReceipt = await this.receiptModel.findOne({ id: response.data.id });

      if (existingReceipt) {
        existingReceipt.agent = response.data.result.agent;
        existingReceipt.receipt = response.data.result.receipt;

        // Save the updated receipt document
        return existingReceipt.save();
      }
    } catch (error) {
        console.log(error);
      }
    }

  async webVerifyReceipt(webVerifyReceiptDto: WebVerifyReceiptDto) {
      try {
        const response = await axios.post('https://8244f62d-064d-4b0f-8173-5193c4d0d563.mock.pstmn.io/', webVerifyReceiptDto, {
          headers: {
            'x-mock-response-name': 'receipt.web.verify'
          }
        });
  
        const existingReceipt = await this.receiptModel.findOne({ id: response.data.id });
  
        if (existingReceipt) {
          existingReceipt.agent = response.data.result.agent;
          existingReceipt.receipt = response.data.result.receipt;
  
          // Save the updated receipt document
          return existingReceipt.save();
        }
      } catch (error) {
        console.log(error);
      }
    }

  async holdReceipt(holdReceiptDto: HoldReceiptDto) {
      try {
        const response = await axios.post('https://8244f62d-064d-4b0f-8173-5193c4d0d563.mock.pstmn.io/', holdReceiptDto, {
          headers: {
            'x-mock-response-name': 'receipt.hold'
          }
        });
  
        const existingReceipt = await this.receiptModel.findOne({ id: response.data.id });
  
        if (existingReceipt) {
          existingReceipt.agent = response.data.result.agent;
          existingReceipt.receipt = response.data.result.receipt;
  
          // Save the updated receipt document
          return existingReceipt.save();
        }
      } catch (error) {
        console.log(error);
      }
    }

  async statusReceipt(statusReceiptDto: StatusReceiptDto) {
      try {
        const response = await axios.post('https://8244f62d-064d-4b0f-8173-5193c4d0d563.mock.pstmn.io/', statusReceiptDto, {
          headers: {
            'x-mock-response-name': 'receipt.status'
          }
        });
  
        const existingReceipt = await this.receiptModel.findOne({ id: response.data.id });
  
        if (existingReceipt) {
          existingReceipt.agent = response.data.result.agent;
          existingReceipt.receipt = response.data.result.receipt;
  
          // Save the updated receipt document
          return existingReceipt.save();
        }
      } catch (error) {
        console.log(error);
      }
    }

  async reverseReceipt(reverseReceiptDto: ReverseReceiptDto) {
      try {
        const response = await axios.post('https://8244f62d-064d-4b0f-8173-5193c4d0d563.mock.pstmn.io/', reverseReceiptDto, {
          headers: {
            'x-mock-response-name': 'receipt.reverse'
          }
        });
  
        const existingReceipt = await this.receiptModel.findOne({ id: response.data.id });
  
        if (existingReceipt) {
          existingReceipt.agent = response.data.result.agent;
          existingReceipt.receipt = response.data.result.receipt;
  
          // Save the updated receipt document
          return existingReceipt.save();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
