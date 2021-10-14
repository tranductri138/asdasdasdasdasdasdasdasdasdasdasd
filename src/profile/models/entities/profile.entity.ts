import { CareerEntity } from 'src/career/models/entities/career.entity';
import { UserEntity } from 'src/user/models/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column({ nullable: true })
  education: string;

  @Column({ nullable: true })
  skill: string;

  @Column({ nullable: true })
  summary: string;

  @Column({ nullable: true })
  experience: string;

  @Column({ nullable: true })
  certifications: string;

  @Column({ nullable: true })
  answersFirst: string;

  @Column({ nullable: true })
  answerSecond: string;

  @Column({ nullable: true })
  answerThird: string;

  //   @Column()
  //   @ManyToOne(() => CareerEntity, (career) => career.name)
  //   careeer: CareerEntity;

  //   @OneToOne(() => CareerEntity, { cascade: true })
  //   @JoinColumn({ name: 'name' })
  //   career: CareerEntity;
  @ManyToOne(() => CareerEntity, (career) => career.profile, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'name' })
  career: CareerEntity;

  @OneToOne(() => UserEntity, (user) => user.profile)
  @JoinColumn()
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
