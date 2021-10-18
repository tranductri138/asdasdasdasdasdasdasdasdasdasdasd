import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileService } from 'src/profile/profile.service';
import { Repository } from 'typeorm';
import { QuestionEntity } from './models/entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly quesRepo: Repository<QuestionEntity>,
    private profileService: ProfileService,
  ) {}

  async createQuestion() {
    const profile = await this.profileService.findOnebyUserid('tris123');

    const question = new QuestionEntity('asdasd', profile);
    this.quesRepo.save(question);
  }

  async findOne(): Promise<QuestionEntity> {
    const id = 3;
    return await this.quesRepo.findOne(id);
  }

  async findAll(id: string): Promise<QuestionEntity[]> {
    return this.quesRepo.find({ profile: { id: id } });
  }
}
