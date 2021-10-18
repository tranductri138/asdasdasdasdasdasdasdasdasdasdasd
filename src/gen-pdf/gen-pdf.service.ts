import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { AnswerService } from 'src/answer/answer.service';
import { ProfileService } from 'src/profile/profile.service';
import { QuestionService } from 'src/ques/question.service';
const fs = require('fs');

@Injectable()
export class PdfSerVice {
  constructor(
    private profileService: ProfileService,
    private questionService: QuestionService,
    private anserService: AnswerService,
  ) {}
  async createPdf(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const profile = await this.profileService.printFullInfor();

    const question = await this.questionService.findAll(profile.id);

    const answer = await this.anserService.findAll(question[0].id);

    // console.log(profile);
    // console.log('answer');
    // console.log(
    //   profile.questions.forEach((question) => {
    //     console.log(question.answers);
    //   }),
    // );

    const doc = new PDFDocument();
    console.log(id);
    const path = `src/file/${Date.now()}.pdf`;
    // Add a 50 point margin on all sides
    doc.pipe(fs.createWriteStream(path));

    doc.fontSize(24);
    doc.font('Times-Roman').text("Candidate's Name :" + '    ' + profile.name);

    doc
      .font('Times-Roman')
      .text("Candidate's Phone :" + '    ' + profile.phone);
    doc
      .font('Times-Roman')
      .text("Candidate's Email :" + '    ' + profile.email);
    doc
      .font('Times-Roman')
      .text("Candidate's Education :" + '    ' + profile.education);

    doc
      .font('Times-Roman')
      .text("Candidate's Career Name :" + '    ' + profile.nameProfile);

    doc
      .font('Times-Roman')
      .text("Candidate's Skill :" + '    ' + profile.skill);

    doc
      .font('Times-Roman')
      .text("Candidate's Summary :" + '    ' + profile.summary);
    doc
      .font('Times-Roman')
      .text("Candidate's Experience :" + '   ' + profile.experience);

    doc
      .font('Times-Roman')
      .text("Candidate's Certifications :" + '    ' + profile.certifications);
    doc
      .font('Times-Roman')
      .text('-------------------------------------------------');
    doc.font('Times-Roman').text("Candidate's " + '       ' + answer[0].answer);
    doc
      .font('Times-Roman')
      .text("Candidate's " + '       ' + question[0].question);

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
