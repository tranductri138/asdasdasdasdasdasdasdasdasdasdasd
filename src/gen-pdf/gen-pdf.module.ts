import { Module } from '@nestjs/common';
import { QuestionModule } from 'src/career/question.module';
import { ProfileModule } from 'src/profile/profile.module';
import { PdfController } from './gen-pdf.controller';
import { PdfSerVice } from './gen-pdf.service';

@Module({
  imports: [ProfileModule, QuestionModule],
  controllers: [PdfController],
  providers: [PdfSerVice],
})
export class GenPdfModule {}
