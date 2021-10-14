import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { QuerryIdDto } from 'src/profile/models/dtos/queryId.dto';
import { PdfSerVice } from './gen-pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private pdfService: PdfSerVice) {}

  @Post()
  async createFilePdf(@Body() query: QuerryIdDto): Promise<string> {
    await this.pdfService.createPdf(query.id);
    return 'succes';
  }
}
