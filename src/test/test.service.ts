import { Injectable } from '@nestjs/common';
import { Test } from './interfaces/test.interface';
import { CreateTestDto } from './dto/create-test.dto';

@Injectable()
export class TestService {
  private tests: Test[] = [];

  getTest(): Test[] {
    return this.tests;
  }

  createTest(test: CreateTestDto): boolean {
    this.tests.push(test);
    return true;
  }

  updateTest(test: Test): void {
    const testFind: Test | null = this.tests.find(
      (item) => item.name == test.name,
    );
    if (testFind) {
      const id = testFind.id;
      this.tests[id].name = test.name;
      this.tests[id].check = test.check;
    }
  }

  removeTest(id: number): void {
    this.tests = this.tests.filter((item) => item.id == id);
  }
}
