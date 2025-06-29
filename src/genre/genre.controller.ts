import { Controller, Get, Post, Patch, Query } from '@nestjs/common';

@Controller('/api/genres')
export class GenreController {
  @Get('/')
  getAllGenres(): string {
    return 'List of genres';
  }

  @Get('/:id')
  getGenreById(): string {
    return 'Details of a specific genre';
  }

  @Get('/search')
  searchGenres(@Query('q') query: string): string {
    return `Search results for genres matching: ${query}`;
  }

  @Post('/')
  addGenre(): string {
    return 'Genre added successfully';
  }

  @Patch('/:id')
  updateGenre(): string {
    return 'Genre updated successfully';
  }
}
