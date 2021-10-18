import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from 'src/profile/profile.module';
import { QuestionModule } from 'src/ques/question.module';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import { AnswerEntity } from './models/entities/answer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnswerEntity]),
    forwardRef(() => ProfileModule),
    forwardRef(() => QuestionModule),
  ],
  controllers: [AnswerController],
  providers: [AnswerService],
  exports: [AnswerService],
})
export class AnswerModule {}
