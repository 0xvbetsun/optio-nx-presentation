import { Injectable } from '@nestjs/common';
import { Book } from '@optio-nx-presentation/api-interfaces';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BooksService {
  books: Book[] = [
    { id: '1', title: 'Book 01', description: 'Pending', pages: 123 },
    { id: '2', title: 'Book 02', description: 'Pending', pages: 123 },
    { id: '3', title: 'Book 03', description: 'Pending', pages: 123 },
  ];

  create(createBookDto: CreateBookDto) {
    const book = { ...createBookDto, id: uuid() };
    this.books = [...this.books, book];
    return this.books;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: string): Book {
    return this.books.find((book) => book.id === id);
  }

  update(id: string, updateBookDto: UpdateBookDto): Book[] {
    this.books = this.books.map((w) =>
      w.id === id ? { ...w, ...updateBookDto } : w
    );

    return this.books;
  }

  remove(id: string): Book[] {
    this.books = this.books.filter((book) => book.id !== id);

    return this.books;
  }
}
