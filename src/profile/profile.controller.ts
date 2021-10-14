import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { AnswerDto } from './models/dtos/answer.profile.dto';
import { CertificationDto } from './models/dtos/certifications.dto';
import { CreateProfileDto } from './models/dtos/create.profile.dto';
import { EducationDto } from './models/dtos/education.dto';
import { ExperienceDto } from './models/dtos/experience.dto';
import { QuerryIdDto } from './models/dtos/queryId.dto';
import { SkillDto } from './models/dtos/skill.dto';
import { SummaryDto } from './models/dtos/summary.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post()
  createProfile(@Body() profile: CreateProfileDto) {
    return this.profileService.createProfile(profile);
  }

  @Put('edu')
  updateEducation(@Body() education: EducationDto) {
    return this.profileService.updateEducation(education);
  }

  @Put('answer')
  answerProfile(@Body() answer: AnswerDto) {
    return this.profileService.answersQuestion(answer);
  }

  @Put('edu')
  eduProfile(@Body() edu: EducationDto) {
    return this.profileService.updateEducation(edu);
  }

  @Put('certification')
  certificationProfile(@Body() certification: CertificationDto) {
    return this.profileService.updateCertification(certification);
  }

  @Put('skill')
  skillProfile(@Body() skill: SkillDto) {
    return this.profileService.updateSkill(skill);
  }

  @Put('exp')
  expProfile(@Body() exp: ExperienceDto) {
    return this.profileService.updateExperience(exp);
  }

  @Put('summary')
  summaryProfile(@Body() summary: SummaryDto) {
    return this.profileService.updateSummary(summary);
  }

  @Get('find')
  findAllProfile() {
    return this.profileService.findAll();
  }

  @Get()
  findOne(@Query() query: QuerryIdDto) {
    return this.profileService.findOne(query.id);
  }
}
