import { Module } from '@nestjs/common';
import { ProfileModule } from 'src/profile/profile.module';
import { PdfController } from './gen-pdf.controller';
import { PdfSerVice } from './gen-pdf.service';

@Module({
  imports: [ProfileModule],
  controllers: [PdfController],
  providers: [PdfSerVice],
})
export class GenPdfModule {}
