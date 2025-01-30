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

  @Prop({ type: String, required: true})
  phone: string;
  @Prop({ type: String, required: true})
  email: string;
  @Prop({ type: String, required: true })
  alt_phone: string;

  @Prop({ type: String, required: true })
  photo: string;
  @Prop({ type: String })
  password: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
