import { maxY } from 'pdfkit/js/page';
import { ProfileEntity } from 'src/profile/models/entities/profile.entity';
import { QuestionEntity } from 'src/ques/models/entities/question.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('answer')
export class AnswerEntity {
  constructor(
    answer: string,
    profile: ProfileEntity,
    question: QuestionEntity,
  ) {
    this.answer = answer;
    this.profile = profile;
    this.question = question;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answer: string;

  @ManyToOne(() => ProfileEntity, (profile) => profile.answers, {
    cascade: true,
  })
  profile: ProfileEntity;

  @ManyToOne(() => QuestionEntity, (question) => question.answers, {
    cascade: true,
  })
  question: QuestionEntity;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
