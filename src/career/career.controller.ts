import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CareerService } from './career.service';
import { CreateCareerDto } from './models/dtos/create.career.dto';
import { QuestionDto } from './models/dtos/update.question.dto';
import { QuestionFirstDto } from './models/dtos/update.questionFirst';

@Controller('career')
export class CareerController {
  constructor(private careerService: CareerService) {}

  @Post()
  createCareer(@Body() career: CreateCareerDto) {
    return this.careerService.createCareer(career);
  }

  @Put()
  updateQuestion(@Body() question: QuestionDto) {
    console.log(question);
    return this.careerService.updateCareerQuestion(question);
  }

  @Put('first')
  updateQuestionFirst(@Body() question: QuestionFirstDto) {
    return this.careerService.updateQuestionFirst(question);
  }
}
