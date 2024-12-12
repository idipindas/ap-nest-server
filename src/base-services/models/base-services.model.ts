import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Admin } from 'src/admin/model/admin.model';

@Schema({ timestamps: true })
export class BaseServices extends Document {
  @Prop({ type: Boolean, required: true, default: true })
  status: boolean;

  @Prop({ type: String, required: true })
  service_name: string;

  @Prop({ type: String, required: true })
  service_desc: string;

  @Prop({ type: String, required: true })
  service_price: number;

  @Prop({ type: Types.ObjectId, required: true, ref: 'Admin' })
  createdBy: Admin;
}

export const baseServicesSchema = SchemaFactory.createForClass(BaseServices);
