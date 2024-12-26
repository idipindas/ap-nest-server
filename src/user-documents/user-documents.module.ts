import { Module } from '@nestjs/common';
import { UserDocumentsService } from './user-documents.service';
import { UserDocumentsController } from './user-documents.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserDocuments,
  UserDocumentSchema,
} from './models/user-document.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserDocuments.name, schema: UserDocumentSchema },
    ]),
  ],
  controllers: [UserDocumentsController],
  providers: [UserDocumentsService],
})
export class UserDocumentsModule {}
