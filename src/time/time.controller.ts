import { Controller, Get } from '@nestjs/common';

@Controller('time')
export class TimeController {
  @Get()
  getTime() {
    const date = new Date();
    return {
      time: date.toUTCString(),
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
      second: date.getUTCSeconds(),
      day: date.getUTCDay(),
      month: date.getUTCMonth(),
      year: date.getUTCFullYear(),
    };
  }
}
