import { Controller, Get, Param } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('api/users')
export class UserController {
  @Get(':id')
  getById(@Param('id') id: string): string {
    return 'User details for ID: ' + id;
  }
}
