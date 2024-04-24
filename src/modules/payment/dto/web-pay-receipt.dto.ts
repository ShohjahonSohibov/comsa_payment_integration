import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WebPayReceiptDto {
  @ApiProperty({
    description: 'JSON-RPC version',
    example: '2.0',
  })
  @IsNotEmpty()
  jsonrpc: string;

  @ApiProperty({
    description: 'Method of the receipt',
    example: 'receipt.web.pay',
  })
  @IsNotEmpty()
  method: string;

  @ApiProperty({
    description: 'ID of the receipt',
    example: 2,
  })
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'Params of the receipt',
  })
  params: {
    receipt_id: string;
    card: {
      pan: string;
      expire: string;
    };
  };
}
