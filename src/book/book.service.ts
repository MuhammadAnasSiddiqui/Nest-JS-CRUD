import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookSerivce {
    public books: Book[] = [];

    // add book 
    addBookService(book: Book): string {
        book.id = uuidv4()
        this.books.push(book)
        return "Book has been successfully added"
    }
    // update book 
    updateBookService(book: Book): string {
        let index = this.books.findIndex((currentIndex) => {
            return currentIndex.id == book.id
        });

        this.books[index] = book
        return "Book has been successfully updated"
    }
    // delete book 
    deleteBookService(bookId: string): string {
        this.books = this.books.filter((book) => {
            return book.id != bookId
        })
        return "Book has been successfully deleted"

    }
    // find all books
    findAllBooks(): Book[] {
        return this.books
    }
} 