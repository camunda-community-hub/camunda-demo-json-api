import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeController } from './time/time.controller';

@Module({
  imports: [],
  controllers: [AppController, TimeController],
  providers: [AppService],
})
export class AppModule {}
