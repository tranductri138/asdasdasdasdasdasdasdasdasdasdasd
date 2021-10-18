import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QuestionDto } from './models/dtos/update.question.dto';
import { QuestionFirstDto } from './models/dtos/update.questionFirst';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private quesService: QuestionService) {}

  @Post()
  createQuestion() {
    this.quesService.createQuestion();
  }
}
