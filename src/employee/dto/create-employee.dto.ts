// create-employee.dto.ts
export class CreateEmployeeDto {
  name: string;
  email: string;
  phone: string;
  address?: string;
  photo?: string;
  adhar: string;
  center: string;
  password: string;
}
