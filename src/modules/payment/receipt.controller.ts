import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { Public } from 'src/decorator/auth.decorator';
import { WebPayReceiptDto } from './dto/web-pay-receipt.dto';
import { WebVerifyReceiptDto } from './dto/web-verify-receipt.dto';
import { HoldReceiptDto } from './dto/hold-receipt.dto';
import { StatusReceiptDto } from './dto/status-receipt.dto';
import { ReverseReceiptDto } from './dto/reverse-receipt.dto';

@ApiBearerAuth()
@ApiTags('payment')
@Controller('payment')
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Public()
  @Post('create')
  @ApiOperation({ summary: 'Create a receipt' })
  createReceipt(@Body() createReceiptDto: CreateReceiptDto) {
    return this.receiptService.createReceipt(createReceiptDto);
  }

  @Public()
  @Post('web-pay')
  @ApiOperation({ summary: 'Web pay receipt' })
  webPayReceipt(@Body() webPayReceiptDto: WebPayReceiptDto) {
    return this.receiptService.webPayReceipt(webPayReceiptDto);
  }

  @Public()
  @Post('web-verify')
  @ApiOperation({ summary: 'Web verify receipt' })
  webVerifyReceipt(@Body() webVerifyReceiptDto: WebVerifyReceiptDto) {
    return this.receiptService.webVerifyReceipt(webVerifyReceiptDto);
  }

  @Public()
  @Post('hold')
  @ApiOperation({ summary: 'Hold receipt' })
  holdReceipt(@Body() holdReceiptDto: HoldReceiptDto) {
    return this.receiptService.holdReceipt(holdReceiptDto);
  }

  @Public()
  @Post('status')
  @ApiOperation({ summary: 'Get status of a receipt' })
  statusReceipt(@Body() statusReceiptDto: StatusReceiptDto) {
    // Since it's a GET request, there's no need for @Body() here
    return this.receiptService.statusReceipt(statusReceiptDto);
  }

  @Public()
  @Put('reverse')
  @ApiOperation({ summary: 'Reverse a receipt' })
  reverseReceipt(@Body() reverseReceiptDto: ReverseReceiptDto) {
    return this.receiptService.reverseReceipt(reverseReceiptDto);
  }
}
