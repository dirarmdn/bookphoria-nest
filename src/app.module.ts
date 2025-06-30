import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { GenresModule } from './genres/genres.module';
import { ShelvesModule } from './shelves/shelves.module';

@Module({
  imports: [
    UserModule,
    BookModule,
    AuthorModule,
    ShelfModule,
    GenreModule,
    UsersModule,
    AuthorsModule,
    BooksModule,
    GenresModule,
    ShelvesModule,
  ],
  controllers: [AppController, AuthorController, ShelfController],
  providers: [AppService],
})
export class AppModule {}
