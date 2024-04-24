import { Prop } from '@nestjs/mongoose';

export class DateSchema {
  @Prop({ default: true })
  status: boolean;

  @Prop({ name: 'created_at', default: new Date(), required: true })
  createdAt: Date;

  @Prop({ name: 'updated_at', default: null })
  updatedAt: Date;

  @Prop({ name: 'deleted_at', default: null })
  deletedAt: Date;
}
