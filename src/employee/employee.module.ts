import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
// import { Employee, EmployeeSchema } from './models/employee.model';
import {
  EmployeeBankDetails,
  EmployeeBankDetailsSchema,
} from './models/bank-details.model';
import { Employee, EmployeeSchema } from './models/emp.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: EmployeeBankDetails.name, schema: EmployeeBankDetailsSchema },

    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
