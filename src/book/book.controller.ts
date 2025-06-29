import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('api/books')
export class BookController {
  @Get('/')
  getAllBooks(): string {
    return 'List of books';
  }

  @Get('/:id')
  getBookById(@Param('id') bookId: string): string {
    return 'Details of a specific book id:' + bookId;
  }

  @Get('/search')
  searchBooks(@Query('q') query: string): string {
    return `Search results for books matching: ${query}`;
  }

  @Post('/')
  addBook(@Body() bookData: string): string {
    return 'Book added successfully' + bookData;
  }

  @Patch('/:id')
  updateBook(@Param('id') bookId: string): string {
    return 'Book updated successfully' + bookId;
  }
}
