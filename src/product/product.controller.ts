import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UserService } from 'src/user/user.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getProduct(): string {
    return this.productService.getProduct();
  }

  @Get('user')
  getUserGlobal(): string {
    return this.userService.getUserShared();
  }
}
