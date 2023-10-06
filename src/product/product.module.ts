import { Global, Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UserModule } from 'src/user/user.module';

// Still export Service
// But with @Global() decorator
// UserModule not have to import ProductModule
// Can use without import

@Global()
@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [UserModule],
  exports: [ProductService],
})
export class ProductModule {}
