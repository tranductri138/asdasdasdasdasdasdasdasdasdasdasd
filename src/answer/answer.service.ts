import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileService } from 'src/profile/profile.service';
import { QuestionService } from 'src/ques/question.service';
import { Repository } from 'typeorm';
import { AnswerEntity } from './models/entities/answer.entity';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(AnswerEntity)
    private answerRepo: Repository<AnswerEntity>,
    private profileService: ProfileService,
    private questionService: QuestionService,
  ) {}

  async createAnswer() {
    const profile = await this.profileService.findOnebyUserid('tris123');
    const question = await this.questionService.findOne();
    const answer = new AnswerEntity('asdasd', profile, question);
    this.answerRepo.save(answer);
  }

  async findAll(id: number): Promise<AnswerEntity[]> {
    return this.answerRepo.find({ question: { id } });
  }
}
