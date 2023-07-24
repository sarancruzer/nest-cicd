import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Hello World! Hello World! Hello World!';
  }

  getHelloDev(): string {
    return 'Hello World! development branch';
  }
}
