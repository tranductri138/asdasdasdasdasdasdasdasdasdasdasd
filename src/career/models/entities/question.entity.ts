import { ProfileEntity } from 'src/profile/models/entities/profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('question')
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;
  // @OneToMany(() => ProfileEntity, profile => profile.)

  @Column({ nullable: false, unique: true })
  question: string;

  @ManyToOne(() => ProfileEntity, (profile) => profile.questions, {
    cascade: true,
  })
  profile: ProfileEntity;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
