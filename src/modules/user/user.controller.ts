import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { throwIfEmpty } from 'rxjs';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  add(@Body() user: { username: string; password: number }) {
    return this.userService.add(user);
  }

  @Post("login")
  login(@Body() user: { username: string; password: number }) {
    return this.userService.login(user);
  }


  @Put(':id')
  update(
    @Param('id') id: number,
    @Body()
    task: any,
  ) {
    return this.userService.update(id, task);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
