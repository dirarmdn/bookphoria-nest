import { Controller, Post, Patch, Get, Query } from '@nestjs/common';

@Controller('/api/authors')
export class AuthorController {
  @Get('/')
  getAllAuthors(): string {
    return 'List of authors';
  }

  @Get('/:id')
  getAuthorById(): string {
    return 'Details of a specific author';
  }

  @Get('/search')
  searchAuthors(@Query('q') query: string): string {
    return `Search results for authors matching: ${query}`;
  }

  @Post('/')
  addAuthor(): string {
    return 'Author added successfully';
  }

  @Patch('/:id')
  updateAuthor(): string {
    return 'Author updated successfully';
  }
}
