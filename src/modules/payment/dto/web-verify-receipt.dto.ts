import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WebVerifyReceiptDto {
  @ApiProperty({
    description: 'ID of the receipt',
    example: 123,
  })
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'JSON-RPC version',
    example: '2.0',
  })
  @IsNotEmpty()
  jsonrpc: string;

  @ApiProperty({
    description: 'Method of the receipt',
    example: 'receipt.web.verify',
  })
  @IsNotEmpty()
  method: string;

  @ApiProperty({
    description: 'Params of the receipt',
  })
  params: {
    receipt_id: string;
    otp: string;
  };
}
