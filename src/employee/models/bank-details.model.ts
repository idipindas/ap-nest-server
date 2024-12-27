import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/models/user.model';
import { Employee } from './employee.model';

@Schema({ timestamps: true })
export class EmployeeBankDetails extends Document {
  @Prop({ type: Boolean, required: true, default: true })
  status: boolean;

  @Prop({ type: String, required: true })
  acc_no: string;

  @Prop({ type: String, unique: true })
  ifsc_code: string;

  @Prop({ type: Types.ObjectId, required: true, ref: 'Employee' })
  emp_id: Employee;
}

export const EmployeeBankDetailsSchema =
  SchemaFactory.createForClass(EmployeeBankDetails);
