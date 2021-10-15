import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import e from 'express';
import { EmailDto } from './models/dtos/email.dto';
import { SendEmailService } from './send-email.service';

@Controller('email')
@ApiTags('Email')
export class SendEmailController {
  constructor(private sendEmailService: SendEmailService) {}

  @Post('send')
  invinite3(@Body() email: EmailDto) {
    console.log('is here');
    this.sendEmailService.sendEmail(email.email);
  }
}
