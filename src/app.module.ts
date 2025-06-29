import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { AuthorController } from './author/author.controller';
import { GenreController } from './genre/genre.controller';
import { ShelfController } from './shelf/shelf.controller';
import { AuthorModule } from './author/author.module';
import { GenreModule } from './genre/genre.module';
import { ShelfModule } from './shelf/shelf.module';

@Module({
  imports: [UserModule, BookModule, AuthorModule, GenreModule, ShelfModule],
  controllers: [
    AppController,
    AuthorController,
    GenreController,
    ShelfController,
  ],
  providers: [AppService],
})
export class AppModule {}
