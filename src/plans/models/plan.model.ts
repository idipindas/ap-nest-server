import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Admin } from 'src/admin/model/admin.model';

@Schema({ timestamps: true })
export class Plans extends Document {
  @Prop({ type: Boolean, required: true, default: true })
  status: boolean;

  @Prop({ type: String, required: true })
  plan_name: string;

  @Prop({ type: String, required: true })
  plan_desc: string;

  @Prop({ type: String, required: true })
  plan_price: number;

  @Prop({ type: String, unique: true })
  plan_expiry_date: Date;

  @Prop({ type: Types.ObjectId, required: true, ref: 'Admin' })
  createdBy: Admin;
}

export const PlanSchema = SchemaFactory.createForClass(Plans);
