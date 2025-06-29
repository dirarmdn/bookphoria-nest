import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('/api/shelves')
export class ShelfController {
  @Get('/')
  getAllShelves(): string {
    return 'List of shelves';
  }

  @Get('/:id')
  getShelfById(): string {
    return 'Details of a specific shelf';
  }

  @Post('/')
  addShelf(): string {
    return 'Shelf added successfully';
  }

  @Patch('/:id')
  updateShelf(): string {
    return 'Shelf updated successfully';
  }

  @Delete('/:id')
  deleteShelf(): string {
    return 'Shelf deleted successfully';
  }
}
