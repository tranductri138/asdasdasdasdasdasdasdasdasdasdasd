import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

export const API_KEY =
  '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';

export const msg = {
  to: 'tris.tran@techvify.com.vn',
  from: 'tritocao@gmail.com',
  subject: 'Hello I am tris',
  text: 'Hello ',
  html: '<h1> Hello Im tris come from Sendgrid </h1>',
};

@Injectable()
export class SendEmailService {
  constructor(private readonly mailerService: MailerService) {}
  sendEmail(email: string) {
    this.mailerService.sendMail({
      to: email, // list of receivers
      from: 'noreply@nestjs.com', // sender address
      subject: 'Testing Nest MailerModule ✔', // Subject line
      text: 'welcome', // plaintext body
      html: '<h1>welcome</h1>', // HTML body content
    });
    console.log('sent succees ');
  }
}
