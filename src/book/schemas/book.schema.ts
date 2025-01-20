import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export enum Category{
    ADVENTUR = "adventure",
    CLASSIC = "classic",
    CRIME = "crime",
    FANTASY = "fantasy"
}


export type BookDocument = Book & Document;

@Schema({timestamps : true}) //adding timestamp will give me the time when the data was created just like in express we add timestamp at the end of schema
export class Book{

    @Prop()
    title: string;

    @Prop()
    description : string;

    @Prop()
    author: string;

    @Prop()
    price : number;

    @Prop({enum: Category})
    category: Category;
}


export const BookSchema = SchemaFactory.createForClass(Book);