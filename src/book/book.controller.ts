import { Controller, Get } from '@nestjs/common';

@Controller('api/books')
export class BookController {
  @Get('/')
  getAllBooks(): string {
    return 'List of books';
  }

  @Get('/:id')
  getBookById(): string {
    return 'Details of a specific book';
  }
}
