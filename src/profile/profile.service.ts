import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CareerService } from 'src/career/career.service';
import { Repository } from 'typeorm';
import { AnswerDto } from './models/dtos/answer.profile.dto';
import { CertificationDto } from './models/dtos/certifications.dto';
import { CreateProfileDto } from './models/dtos/create.profile.dto';
import { EducationDto } from './models/dtos/education.dto';
import { ExperienceDto } from './models/dtos/experience.dto';
import { SkillDto } from './models/dtos/skill.dto';
import { SummaryDto } from './models/dtos/summary.dto';
import { ProfileEntity } from './models/entities/profile.entity';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepo: Repository<ProfileEntity>,
    private careerService: CareerService,
    private profileRepobyMe: ProfileRepository,
  ) {}

  async createProfile(profile: CreateProfileDto): Promise<CreateProfileDto> {
    const career = await this.careerService.findOne(profile.career);
    if (career.name == profile.career) {
      await this.profileRepobyMe.createProfile(
        profile.name,
        profile.phone,
        profile.email,
        profile.career,
      );
    } else {
      throw new NotFoundException('Career not found !!!');
    }
    return profile;
  }

  async answersQuestion(answer: AnswerDto): Promise<AnswerDto> {
    const { uuid, ...rest } = answer;
    await this.profileRepo.update(uuid, rest);
    return answer;
  }

  async updateEducation(education: EducationDto): Promise<EducationDto> {
    const { uuid, ...rest } = education;
    await this.profileRepo.update(uuid, rest);
    return education;
  }

  async updateCertification(
    certification: CertificationDto,
  ): Promise<CertificationDto> {
    const { uuid, ...rest } = certification;
    await this.profileRepo.update(uuid, rest);
    return certification;
  }

  async updateExperience(exp: ExperienceDto): Promise<ExperienceDto> {
    const { uuid, ...rest } = exp;
    await this.profileRepo.update(uuid, rest);
    return exp;
  }

  async updateSkill(skill: SkillDto): Promise<SkillDto> {
    const { uuid, ...rest } = skill;
    await this.profileRepo.update(uuid, rest);
    return skill;
  }

  async updateSummary(summary: SummaryDto): Promise<SummaryDto> {
    const { uuid, ...rest } = summary;
    await this.profileRepo.update(uuid, rest);
    return summary;
  }

  async findAll() {
    return await this.profileRepo.find();
  }

  async findOne(uuid: string): Promise<ProfileEntity> {
    console.log(uuid);

    return await this.profileRepo.findOne(uuid);
  }
}
