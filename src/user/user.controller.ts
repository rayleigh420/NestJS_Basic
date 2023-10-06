import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('user')
export class UserControler {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@Query('id') id: string, @Req() req: Request): string {
    return 'Get detail user by query string id: ' + id + ' or ' + req.query.id;
    // return this.userService.getUser();
  }

  @Get('/:id')
  getDetailUserById(@Param('id') id: string, @Req() req: Request): string {
    return 'Get detail user by id ' + id + ' or ' + req.params.id;
  }

  @Get('')
  getDetailUserByQueryId(@Query('id') id: string, @Req() req: Request): string {
    return 'Get detail user by query string id: ' + id + ' or ' + req.query.id;
  }
}
