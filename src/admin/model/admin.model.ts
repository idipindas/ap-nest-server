import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // Automatically manage createdAt and updatedAt
export class Admin extends Document {
  @Prop({ type: Boolean, required: true })
  status: boolean;

  @Prop({ type: String, required: true })
  admin_username: string;

  @Prop({ type: String, required: true })
  admin_usertype: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
