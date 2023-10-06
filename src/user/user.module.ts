import { Module } from '@nestjs/common';
import { UserControler } from './user.controller';
import { UserService } from './user.service';

// Still export UserService
// Other module have to import UserModule to
// use UserService like ProductModule
@Module({
  controllers: [UserControler],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
