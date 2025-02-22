import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // Automatically manage createdAt and updatedAt
export class PlanBooking extends Document {
    @Prop({ type: Boolean, required: true, default: true })
    status: boolean;

    @Prop({ type: String, required: true })
    desc: string;
    @Prop({ type: Types.ObjectId, required: true, ref: 'Employee' })
    emp_id: Employee;
    @Prop({ type: Types.ObjectId, required: true, ref: 'Employee' })
    emp_id: Employee;



}

export const PlanBookingSchema = SchemaFactory.createForClass(PlanBooking);
