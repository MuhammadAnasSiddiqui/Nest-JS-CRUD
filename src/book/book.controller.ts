import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { BookSerivce } from "./book.service";

@Controller("book")
export class BookController {
    constructor(private bookService: BookSerivce) { }

    @Get("/findAll")
    findAllBooks(): Book[] {
        return this.bookService.findAllBooks()
    }

    @Put("/update")
    updateBook(@Body() book: Book): string {
        return this.bookService.updateBookService(book)
    }

    @Delete("/delete/:id")
    deleteBook(@Param('id') bookId: string): string {
        return this.bookService.deleteBookService(bookId)
    }

    @Post("/add")
    addBook(@Body() book: Book): string {
        return this.bookService.addBookService(book)
    }
}