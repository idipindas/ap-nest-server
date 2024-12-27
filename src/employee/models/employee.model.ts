import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Centers } from 'src/centers/models/centers.model';

@Schema({ timestamps: true })
export class Employee extends Document {
  @Prop({ type: Boolean, required: true, default: true })
  status: boolean;

  @Prop({ type: String, required: true })
  employee_name: string;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: Types.ObjectId, required: true, ref: 'Centers' })
  center: Centers;
 

  @Prop({ type: String, required: true })
  phone: string;
  @Prop({ type: String, required: true, unique: true })
  email: string;
  @Prop({ type: String, required: true, unique: true })
  alt_phone: string;

  @Prop({ type: String, unique: true })
  photo: string;
  @Prop({ type: String, unique: true })
  password: string;
//   @Prop({ type: String, required: true, enum: ['adhar', 'pancard'] })
//   document_type: string;

//   @Prop({ type: String, unique: true })
//   doc: string;




}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
