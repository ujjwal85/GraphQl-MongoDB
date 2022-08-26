/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('Student')
export class StudentType{
    @Field()
    id: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;
    
}