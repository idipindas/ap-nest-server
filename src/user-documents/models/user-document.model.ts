import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/models/user.model';

@Schema({ timestamps: true })
export class UserDocuments extends Document {
  @Prop({ type: Boolean, required: true, default: true })
  status: boolean;

  @Prop({ type: String, required: true, enum: ['adhar', 'pancard'] })
  document_type: string;

  @Prop({ type: String, unique: true })
  doc: Date;

  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  user_id: User;
}

export const UserDocumentSchema = SchemaFactory.createForClass(UserDocuments);
