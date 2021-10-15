import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { GenPdfModule } from './gen-pdf/gen-pdf.module';
import { SendEmailModule } from './send-email/send-email.module';
import { QuestionModule } from './career/question.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({}),
    UserModule,
    AuthModule,
    ProfileModule,
    QuestionModule,
    GenPdfModule,
    SendEmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
