import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Employee } from 'src/employee/models/employee.model';
import { User } from 'src/user/models/user.model';

@Schema({ timestamps: true })
export class EmployeeDocument extends Document {
  @Prop({ type: Boolean, required: true, default: true })
  status: boolean;

  @Prop({ type: String, required: true, enum: ['adhar', 'pancard'] })
  document_type: string;

  @Prop({ type: String, unique: true })
  doc: string;
  @Prop({ type: Types.ObjectId, required: true, ref: 'Employee' })
  emp_id: Employee;
}

export const EmployeeDocumentSchema =
  SchemaFactory.createForClass(EmployeeDocument);
