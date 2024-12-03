import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthnGuard } from '../../guards/authn.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(AuthnGuard)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.usersService.findOneProfile(username);
  }

  @Patch(':username')
  @UseGuards(AuthnGuard)
  update(
    @Param('username') username: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(username, updateUserDto);
  }

  @Delete(':username')
  delete(@Param('username') username: string) {
    return this.usersService.delete(username);
  }
}
