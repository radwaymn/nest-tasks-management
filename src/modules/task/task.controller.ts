import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.taskService.findOne(id);
  }

  @Post()
  add(@Body() task: { title: string; userId: number; statusId: number }) {
    return this.taskService.add(task);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body()
    task: any,
  ) {
    return this.taskService.update(id, task);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.taskService.delete(id);
  }
}
