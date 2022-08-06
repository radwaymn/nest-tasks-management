import { BadRequestException, Injectable } from '@nestjs/common';

import * as data from '../../data/data.json';
let tasks = data.tasks;

@Injectable()
export class TaskService {
  findAll() {
    return tasks;
  }

  findOne(id: number) {
    const task = tasks.find((item) => item.id == id);
    if (!task) {
      throw new BadRequestException('No task found');
    }
    return task;
  }

  add(task: any) {
    const id = tasks[tasks.length - 1].id + 1;
    const newTask = {
      id,
      ...task,
    };
    tasks.push(newTask);
    return newTask;
  }

  update(id: number, newTask: any) {
    const taskIndex = tasks.findIndex((item) => item.id == id);
    if (taskIndex == -1) {
      throw new BadRequestException('No task found');
    }

    const taskUpdated = { ...tasks[taskIndex], ...newTask };

    tasks[taskIndex] = taskUpdated;
    return taskUpdated;
  }

  delete(id: number) {
    const task = tasks.find((item) => item.id == id);
    if (!task) {
      throw new BadRequestException('No task found');
    }
    tasks = tasks.filter((item) => item.id != id);
    return `task ${task.title} deleted`;
  }

  findUserTasks(userId: number) {
		return tasks.filter(task => task.userId === userId)
	}
}
