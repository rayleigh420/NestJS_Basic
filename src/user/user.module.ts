import { Module } from '@nestjs/common';
import { UserControler } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserControler],
  providers: [UserService],
})
export class UserModule {}
