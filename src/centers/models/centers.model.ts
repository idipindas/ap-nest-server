import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // Automatically manage createdAt and updatedAt
export class Centers extends Document {
  @Prop({ type: Boolean, required: true, default: true })
  status: boolean;

  @Prop({ type: String, required: true })
  center_name: string;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: String, required: true })
  district: string;
  @Prop({ type: String, required: true })
  state: string;

  @Prop({ type: String, required: true })
  city: string;
  @Prop({ type: String, required: true, unique: true })
  pin: string;
}

export const CentersSchema = SchemaFactory.createForClass(Centers);
