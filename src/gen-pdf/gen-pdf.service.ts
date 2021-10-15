import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';

@Injectable()
export class PdfSerVice {
  async createPdf(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    const doc = new PDFDocument();
    console.log(id);
    const path = `src/file/${Date.now()}.pdf`;
    // Add a 50 point margin on all sides
    doc.pipe(fs.createWriteStream(path));

    // doc.fontSize(24);
    // doc.font('Times-Roman').text("Candidate's Name :" + '    ' + profile.name);

    // doc
    //   .font('Times-Roman')
    //   .text("Candidate's Phone :" + '    ' + profile.phone);
    // doc
    //   .font('Times-Roman')
    //   .text("Candidate's Email :" + '    ' + profile.email);
    // doc
    //   .font('Times-Roman')
    //   .text("Candidate's Education :" + '    ' + profile.education);

    // doc
    //   .font('Times-Roman')
    //   .text("Candidate's Career Name :" + '    ' + profile.careerName);

    // doc
    //   .font('Times-Roman')
    //   .text("Candidate's Skill :" + '    ' + profile.skill);

    // doc
    //   .font('Times-Roman')
    //   .text("Candidate's Summary :" + '    ' + profile.summary);
    // doc
    //   .font('Times-Roman')
    //   .text("Candidate's Experience :" + '   ' + profile.experience);

    // doc
    //   .font('Times-Roman')
    //   .text("Candidate's Certifications :" + '    ' + profile.certifications);
    // doc
    //   .font('Times-Roman')
    //   .text('-------------------------------------------------');
    // doc
    //   .font('Times-Roman')
    //   .text(
    //     'Question First -' +
    //       career.questionFirst +
    //       ':  ' +
    //       profile.answersFirst,
    //   );
    // doc
    //   .font('Times-Roman')
    //   .text(
    //     'Question Second -' +
    //       career.questionSecond +
    //       ':  ' +
    //       profile.answerSecond,
    //   );
    // doc
    //   .font('Times-Roman')
    //   .text(
    //     'Question Third -' + career.questionThird + ':  ' + profile.answerThird,
    //   );

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
