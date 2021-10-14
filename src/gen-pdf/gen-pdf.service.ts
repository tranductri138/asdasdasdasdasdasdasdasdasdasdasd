import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as PDFDocument from 'pdfkit';
import { ProfileEntity } from 'src/profile/models/entities/profile.entity';
import { ProfileService } from 'src/profile/profile.service';

@Injectable()
export class PdfSerVice {
  constructor(private profileRepo: ProfileService) {}

  async createPdf(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    const doc = new PDFDocument();
    console.log(id);

    const profile = await this.profileRepo.findOne(id);
    console.log(profile);
    const path = `src/file/${Date.now()}.pdf`;
    // Add a 50 point margin on all sides
    doc.pipe(fs.createWriteStream(path));

    console.log(profile);

    doc.fontSize(24);
    doc.font('Times-Roman').text("candidate's name :" + '    ' + profile.name);
    doc
      .font('Times-Roman')
      .text("candidate's summary :" + '    ' + profile.summary);
    doc
      .font('Times-Roman')
      .text("candidate's email :" + '    ' + profile.email);
    doc
      .font('Times-Roman')
      .text("candidate's phone :" + '    ' + profile.phone);
    doc.font('Times-Roman');
    doc
      .font('Times-Roman')
      .text("candidate's email :" + '    ' + profile.certifications);
    //   .text("candidate's skill :" + '    ' + profile.skill);

    // doc.addPage({
    //   margin: 50,
    // });
    // // Add different margins on each side
    // doc.addPage({
    //   margins: {
    //     top: 50,
    //     bottom: 50,
    //     left: 72,
    //     right: 72,
    //   },
    // });

    doc.end();
  }
}
