import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Types } from 'mongoose';
import { Center } from 'src/centers/entities/center.entity';

@Schema({ timestamps: true })
export class Employee extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true, unique: true })
    phone: string;

    @Prop()
    address: string;

  

    @Prop({ type: Types.ObjectId, ref: 'Center', required: true })
    center: Center;

    @Prop({ required: true })
    password: string;
}



export const EmployeeSchema = SchemaFactory.createForClass(Employee);
