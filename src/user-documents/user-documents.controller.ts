import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserDocumentsService } from './user-documents.service';
import { CreateUserDocumentDto } from './dto/create-user-document.dto';
import { UpdateUserDocumentDto } from './dto/update-user-document.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';

@Controller('user-documents')
export class UserDocumentsController {
  constructor(private readonly userDocumentsService: UserDocumentsService) {}
  // @Post('/:userId')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: (req, file, cb) => {
  //         const userId = req.params.userId;

  //         const uploadPath = path.join(
  //           __dirname,
  //           '..',
  //           'uploads',
  //           'user-documents',
  //           userId,
  //         );

  //         if (!fs.existsSync(uploadPath)) {
  //           fs.mkdirSync(uploadPath, { recursive: true });
  //         }

  //         cb(null, uploadPath);
  //       },
  //       filename: (req, file, cb) => {
  //         const uniqueSuffix =
  //           Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         const ext = extname(file.originalname);
  //         cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  //       },
  //     }),
  //     fileFilter: (req, file, cb) => {
  //       if (!file.originalname.match(/\.(pdf|doc|docx|jpg|jpeg|png)$/)) {
  //         return cb(
  //           new HttpException('Invalid file type', HttpStatus.BAD_REQUEST),
  //           false,
  //         );
  //       }
  //       cb(null, true);
  //     },
  //     limits: {
  //       fileSize: 5 * 1024 * 1024, // 5MB
  //     },
  //   }),
  // )
  // create(
  //   @Body() createUserDocumentDto: CreateUserDocumentDto,
  //   @Param('userId') userId: string,
  //   @UploadedFile() file: Express.Multer.File,
  // ) {
  //   if (!file) {
  //     throw new HttpException('File is required', HttpStatus.BAD_REQUEST);
  //   }

  //   const documentData = {
  //     ...createUserDocumentDto,
  //     userId,
  //     filePath: file.path,
  //     originalFileName: file.originalname,
  //     fileSize: file.size,
  //   };

  //   return this.userDocumentsService.create(documentData);
  // }

  @Get()
  findAll() {
    return this.userDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userDocumentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDocumentDto: UpdateUserDocumentDto,
  ) {
    return this.userDocumentsService.update(+id, updateUserDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDocumentsService.remove(+id);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadDir = path.join(process.cwd(), 'uploads');
          if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
          }
          cb(null, uploadDir);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = path.extname(file.originalname);
          cb(null, `${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() createUserDocumentDto: CreateUserDocumentDto,
  ) {
    const baseDir = process.cwd();
    const relativePath = path.relative(baseDir, file.path);
    const normalizedPath = relativePath.replace(/\\/g, '/');

    if (!file) {
      throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
    }
    console.log('Uploaded File:', {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      path: file.path,
      createUserDocumentDto,
    });
    const baseUrl = process.env.SERVER_URL;
    const fileUrl = `${baseUrl}/${normalizedPath}`;
    const resp = this.userDocumentsService.create({
      doc: normalizedPath,
      user_id: createUserDocumentDto?.user_id,
      document_type: createUserDocumentDto?.document_type,
    });
    return resp;
  }
}
