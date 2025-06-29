import { Controller, Get, Param, Patch } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('api/users')
export class UserController {
  @Get(':id')
  getById(@Param('id') id: string): string {
    return 'User details for ID: ' + id;
  }

  @Patch(':id')
  updateUser(@Param('id') id: string): string {
    return `User with ID ${id} updated successfully`;
  }
}
