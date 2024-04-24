import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReceiptDto {
  @ApiProperty({
    description: 'JSON-RPC version',
    example: '2.0',
  })
  @IsNotEmpty()
  jsonrpc: string;

  @ApiProperty({
    description: 'Method of the receipt',
    example: 'receipt.create',
  })
  @IsNotEmpty()
  method: string;

  @ApiProperty({
    description: 'ID of the receipt',
    example: 123,
  })
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'Params of the receipt',
  })
  params: {
    ext_id: string;
    service: string;
    params: {
      amount: number;
    };
    receiver_id: string;
    hold: {
      holding_time: number;
      after_expired: string;
    };
  };
}
