import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Hello World! Hello World! Hello World! Welcome to new workflow Main branch changes';
  }
}
