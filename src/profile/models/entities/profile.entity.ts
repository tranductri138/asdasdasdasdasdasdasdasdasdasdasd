import { AnswerEntity } from 'src/answer/models/entities/answer.entity';
import { QuestionEntity } from 'src/career/models/entities/question.entity';
import { UserEntity } from 'src/user/models/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
@Entity('profile')
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  education: string;

  @Column()
  skill: string;

  @Column()
  summary: string;

  @Column()
  experience: string;

  @Column()
  certifications: string;

  @OneToMany(() => QuestionEntity, (question) => question.profile, {})
  questions: QuestionEntity[];

  @OneToMany(() => AnswerEntity, (answer) => answer.profile, {})
  answers: AnswerEntity[];

  @ManyToOne(() => UserEntity, (user) => user.profiles, { cascade: true })
  user: UserEntity;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

// b1 : create fields necessary for profile
// Name;
// Phone;
// Email;

// Education;

// Skill;

// Sumary;

// Experience;

// Certifications;

//  b2 : create answers

// b3 constraint profile to career

// b4 : create constraint to user
