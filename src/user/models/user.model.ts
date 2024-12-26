import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Centers } from 'src/centers/models/centers.model';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ type: Boolean, required: true })
  status: boolean;

  @Prop({ type: String, required: true })
  user_name: string;

  @Prop({ type: String, required: true })
  phone: string;
  @Prop({ type: String, required: true })
  alt_phone: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;
  @Prop({ type: String, required: true })
  address: string;
  @Prop({ type: String, required: true })
  state: string;
  @Prop({ type: String, required: true })
  pin: string;
  @Prop({ type: String, required: true })
  city: string;
  @Prop({ type: Types.ObjectId, required: true, ref: 'Centers' })
  center: Centers;
  @Prop({ type: String, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
