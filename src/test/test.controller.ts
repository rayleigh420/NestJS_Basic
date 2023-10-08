import { Body, Controller, Get, Put } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from '@nestjs/testing';
import { CreateTestDto } from './dto/create-test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getTest(): Test[] {
    return this.testService.getTest();
  }

  @Put()
  createTest(@Body() createTestDto: CreateTestDto): string {
    console.log(createTestDto);
    const result: boolean = this.testService.createTest(createTestDto);
    if (result) {
      return 'Create success!';
    } else {
      return 'Create fail!';
    }
  }
}
