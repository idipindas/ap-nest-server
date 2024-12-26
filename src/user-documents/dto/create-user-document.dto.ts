import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDocumentDto {
  @IsEnum(['adhar', 'pancard'])
  document_type: 'adhar' | 'pancard';

  @IsNotEmpty()
  @IsString()
  doc: string;  // Store the file path or URL

  @IsNotEmpty()
  @IsString()
  user_id: string;  // Reference to the User ID
}
