import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return 'Get User Success!';
  }

  getUserShared(): string {
    return 'Get User By using export service and import module';
  }
}
