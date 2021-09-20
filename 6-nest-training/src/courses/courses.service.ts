import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'Curso completo do framework NestJS',
      price: 99.99,
      tags: ['Framework NestJs', 'Javascript', 'Typescript', 'nodeJs'],
    },
  ];

  public findAll() {
    return this.courses;
  }

  public findOne(id: number) {
    return this.courses.find((course: Course) => course.id === Number(id));
  }

  public create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  public update(id: number, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    this.courses[indexCourse] = updateCourseDto;
  }

  public remove(id: number) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
