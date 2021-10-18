import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfileDto } from './models/dtos/profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post()
  async createProfile(@Body() profile: ProfileDto) {
    return await this.profileService.createProfile(profile);
  }
  @Get('info')
  getInfo() {
    return this.profileService.printFullInfor();
  }

  @Get()
  getProfile() {
    return this.profileService.findAllbyUserid();
  }
}
