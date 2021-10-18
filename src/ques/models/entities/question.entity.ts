import { AnswerEntity } from 'src/answer/models/entities/answer.entity';
import { ProfileEntity } from 'src/profile/models/entities/profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('question')
export class QuestionEntity {
  constructor(question: string, profile: ProfileEntity) {
    this.question = question;
    this.profile = profile;
  }

  @PrimaryGeneratedColumn()
  id: number;
  // @OneToMany(() => ProfileEntity, profile => profile.)

  @Column({ nullable: false })
  question: string;

  @ManyToOne(() => ProfileEntity, (profile) => profile.questions, {
    cascade: true,
  })
  profile: ProfileEntity;

  @OneToMany(() => AnswerEntity, (answer) => answer.question)
  answers: AnswerEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
