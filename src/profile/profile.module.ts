import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from 'src/career/question.module';
import { ProfileEntity } from './models/entities/profile.entity';
import { ProfileController } from './profile.controller';
import { ProfileSerivce } from './profile.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity]), QuestionModule],
  controllers: [ProfileController],
  providers: [ProfileSerivce],
  exports: [ProfileSerivce],
})
export class ProfileModule {}
