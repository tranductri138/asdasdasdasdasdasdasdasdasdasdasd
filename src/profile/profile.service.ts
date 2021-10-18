import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/models/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { ProfileDto } from './models/dtos/profile.dto';
import { ProfileEntity } from './models/entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private profileRepo: Repository<ProfileEntity>,
    private userService: UserService,
  ) {}

  async createProfile(profile: ProfileDto): Promise<ProfileDto> {
    const user = await this.userService.getUserById(
      'af536ddd-78a2-438e-a970-dc018c9e2c66',
    );

    const profileE = new ProfileEntity(
      profile.nameProfile,
      profile.name,
      profile.phone,
      profile.email,
      profile.education,
      profile.skill,
      profile.summary,
      profile.experience,
      profile.certifications,
      user,
    );
    // const _profile = this.profileRepo.create({
    //   ...profile,
    //   user: user,
    // });

    await this.profileRepo.save(profileE);

    // user.profiles = [profileE];
    // this.userService.updateOne(user.id, { ...user });

    return profile;
  }

  async findAllbyUserid(): Promise<ProfileEntity[]> {
    const id = 'af536ddd-78a2-438e-a970-dc018c9e2c66';
    return await this.profileRepo.find({ where: { user: { id: id } } });
  }

  async findOnebyUserid(name: string): Promise<ProfileEntity> {
    const id = 'af536ddd-78a2-438e-a970-dc018c9e2c66';
    return await this.profileRepo.findOne({
      where: { nameProfile: name, user: { id: id } },
    });
  }

  async printFullInfor(): Promise<ProfileEntity> {
    const id = 'af536ddd-78a2-438e-a970-dc018c9e2c66';
    return await this.profileRepo.findOne({
      where: { nameProfile: 'tris123', user: { id: id } },
      relations: [
        'questions',
        // 'answers',
        'questions.answers',
        'user',
        // 'questions.profile',
      ],
    });
  }
}
