import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReceiptModule } from './modules/payment/receipt.module';
import { MongoConfig } from './config/mongo.config';

@Module({
  imports: [
    MongooseModule.forRoot(MongoConfig.connectionString),
    ReceiptModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
