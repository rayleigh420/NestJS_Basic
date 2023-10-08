import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [UserModule, ProductModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
