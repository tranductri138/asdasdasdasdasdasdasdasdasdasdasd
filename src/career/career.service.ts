import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CareerRepository } from './career.repository';
import { CreateCareerDto } from './models/dtos/create.career.dto';
import { QuestionDto } from './models/dtos/update.question.dto';
import { QuestionFirstDto } from './models/dtos/update.questionFirst';
import { CareerEntity } from './models/entities/career.entity';

@Injectable()
export class CareerService {
  constructor(
    @InjectRepository(CareerEntity)
    private readonly careerRepo: Repository<CareerEntity>,
    private careerRepoByMe: CareerRepository,
  ) {}

  async findOne(name: string): Promise<CareerEntity> {
    const a = await this.careerRepo.findOne({ name });
    return a;
  }

  async createCareer(career: CreateCareerDto): Promise<CreateCareerDto> {
    const name = career.name;
    const career1 = await this.careerRepo.findOne({ name: name });
    console.log(career);
    console.log(career1);
    if (career1 == undefined) {
      const newCareer = new CareerEntity();
      newCareer.name = career.name;
      newCareer.questionFirst = career.questionFirst;
      newCareer.questionSecond = career.questionSecond;
      newCareer.questionThird = career.questionThird;
      await this.careerRepo.save(newCareer);
    } else {
      throw new ConflictException('Cannot add add to this entity !!');
    }
    return career;
  }

  async updateCareerQuestion(question: QuestionDto): Promise<QuestionDto> {
    await this.careerRepo
      .createQueryBuilder()
      .update(CareerEntity)
      .set({
        questionSecond: question.questionSecond,
        questionThird: question.questionThird,
      })
      .where('name = :name', { name: question.name })
      .execute();
    return question;
  }

  async updateQuestionFirst(
    question: QuestionFirstDto,
  ): Promise<QuestionFirstDto> {
    //https://github.com/typeorm/typeorm/issues/1586
    const ques = question.question;
    const name = question.name;
    if (ques != undefined && name != undefined) {
      await this.careerRepoByMe.updateQuestionFirst(ques, name);
    } else {
      throw new NotFoundException('Question or Name is null !!');
    }
    return question;
  }
}
