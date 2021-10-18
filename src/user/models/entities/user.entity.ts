import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { Role } from '../dtos/roles.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ProfileEntity } from 'src/profile/models/entities/profile.entity';

@Entity('user')
export class UserEntity {
  @ApiPropertyOptional({ type: String })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @OneToMany(() => ProfileEntity, (profile) => profile.user, {})
  profiles: ProfileEntity[];

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }

  async hashPass(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async isPass(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
