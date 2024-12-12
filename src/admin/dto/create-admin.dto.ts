import { Types } from 'mongoose';

export class CreateAdminDto {
  status: boolean;
  admin_username: string;
  admin_usertype: string;
  email: string;
  password: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}
