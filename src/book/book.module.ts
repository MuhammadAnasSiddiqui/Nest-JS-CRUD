import { Module } from "@nestjs/common";
import { BookSerivce } from "./book.service";
import { BookController } from "./book.controller";

@Module({
    imports: [],
    controllers: [BookController],
    providers: [BookSerivce],
})
export class BookModule {

}