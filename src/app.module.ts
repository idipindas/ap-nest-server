import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './db/database.service';
import { PlansModule } from './plans/plans.module';
import { BaseServicesModule } from './base-services/base-services.module';
import { UserModule } from './user/user.module';
import { CentersModule } from './centers/centers.module';
import { UserDocumentsModule } from './user-documents/user-documents.module';
import { MulterModule } from '@nestjs/platform-express';
import { EmployeeModule } from './employee/employee.module';
import { EmpDocumentsModule } from './emp-documents/emp-documents.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    AdminModule,
    PlansModule,
    BaseServicesModule,
    UserModule,
    CentersModule,
    UserDocumentsModule,
    EmployeeModule,
    EmpDocumentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
