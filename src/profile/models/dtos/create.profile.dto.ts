import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty()
  name: string;

  //   @IsPhoneNumber()
  @ApiProperty()
  phone: string;
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  career: string;
}
