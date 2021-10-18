import { Controller, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
  constructor(private answerService: AnswerService) {}

  @Post()
  createAnswer() {
    this.answerService.createAnswer();
  }
}
