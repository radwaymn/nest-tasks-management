import { BadRequestException, Injectable } from '@nestjs/common';

import * as data from '../../data/data.json';
import { TaskService } from '../task/task.service';
let users = data.users;

@Injectable()
export class UserService {
  constructor(private readonly taskService: TaskService) {}

  findAll() {
    return users;
  }

  findOne(id: number) {
    const user = users.filter((user) => user.id == id);
    if (!user) {
      throw new BadRequestException('No user found');
    }

    const tasks = this.taskService.findUserTasks(id);

    return { user, tasks };
  }

  add(user: any) {
    const id = users[users.length - 1].id + 1;
    const newUser = {
      id,
      ...user,
    };
    users.push(newUser);
    return newUser;
  }

  update(id: number, newUser: any) {
    const userIndex = users.findIndex((item) => item.id == id);
    if (userIndex == -1) {
      throw new BadRequestException('No user found');
    }

    const userUpdated = { ...users[userIndex], ...newUser };

    users[userIndex] = userUpdated;
    return userUpdated;
  }

  delete(id: number) {
    const user = users.find((item) => item.id == id);
    if (!user) {
      throw new BadRequestException('No user found');
    }
    users = users.filter((item) => item.id != id);
    return `user ${user.username} deleted`;
  }

  login({username, password}) {
    const user = users.find((item) => item.username == username && item.password == password);
    if (!user) {
      throw new BadRequestException('Invalid credintials');
    }
    return `Login success`;
  }
}
