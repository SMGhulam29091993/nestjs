import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name) private bookModel: Model<Book>
    ){}

    async findAll() : Promise<Book[]>{

        const books = await this.bookModel.find();
        return books;
    };

    async create(book : Book) : Promise<Book>{
        const res = await this.bookModel.create(book);
        return res;
    }

    async findById(_id : string) : Promise<Book>{
        const res = await this.bookModel.findById(_id);

        if(!res){
            throw new NotFoundException("Book not found...");
        }

        return res;
    };

    async updateById(_id: string, book: Book) : Promise<Book>{
        const res = this.bookModel.findByIdAndUpdate(_id, book, {new : true, runValidators : true});
        return res
    }
}
