import { ProfileEntity } from 'src/profile/models/entities/profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('career')
export class CareerEntity {
  @PrimaryGeneratedColumn()
  id: number;
  // @OneToMany(() => ProfileEntity, profile => profile.)

  @Column({ nullable: false, unique: true })
  name: string;

  @Column()
  questionFirst: string;

  @Column({ nullable: true })
  questionSecond: string;

  @Column({ nullable: true })
  questionThird: string;

  @OneToMany(() => ProfileEntity, (profile) => profile.career)
  profile: ProfileEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
