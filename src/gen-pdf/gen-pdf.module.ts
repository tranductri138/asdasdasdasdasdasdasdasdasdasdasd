import { Module } from '@nestjs/common';
import { QuestionModule } from 'src/ques/question.module';
import { ProfileModule } from 'src/profile/profile.module';
import { PdfController } from './gen-pdf.controller';
import { PdfSerVice } from './gen-pdf.service';
import { AnswerModule } from 'src/answer/answer.module';

@Module({
  imports: [ProfileModule, QuestionModule, AnswerModule],
  controllers: [PdfController],
  providers: [PdfSerVice],
})
export class GenPdfModule {}
