import { Module } from '@nestjs/common';
import { StatusModule } from './modules/status/status.module';
import { TaskModule } from './modules/task/task.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, TaskModule, StatusModule],
})
export class AppModule {}
