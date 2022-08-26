/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Args, Mutation, Resolver,Query } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  //for getById data
  @Query(returns => StudentType)
  student(
      @Args('id') id: string,
  ){
    return this.studentService.getStudent(id);
  }

  //for getAll data
  @Query(returns => [StudentType])
  async students(){
    return this.studentService.getStudents();
  }

  //for register
  @Mutation((returns) => StudentType)
  createStudet(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
    return this.studentService.createStudent(createStudentInput);
  }
}
