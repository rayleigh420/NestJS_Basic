import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProduct(): string {
    return 'Get Product success';
  }

  getProductShared(): string {
    return 'Get product by using @Global decorator';
  }
}
