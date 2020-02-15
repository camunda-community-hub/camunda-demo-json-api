import { Controller, Get } from '@nestjs/common';

@Controller('time')
export class TimeController {
  @Get()
  getTime() {
    const date = new Date();
    return {
      string: date.toString(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      day: date.getDay(),
      month: date.getMonth(),
      year: date.getFullYear(),
      time: date.getTime(),
    };
  }
}
