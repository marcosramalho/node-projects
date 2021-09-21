import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  public findAll() {
    return this.courseRepository.find();
  }

  public findOne(id: number) {
    const course = this.courseRepository.findOne(id);

    if (!course) {
      throw new NotFoundException(`Course Id ${id} not found`);
    }

    return course;
  }

  public create(createCourseDto: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDto);

    return this.courseRepository.save(course);
  }

  public async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.courseRepository.findOne(id);

    if (!course) {
      throw new NotFoundException(`Course Id ${id} not found`);
    }

    return this.courseRepository.update(id, updateCourseDto);
  }

  public async remove(id: number) {
    const course = await this.courseRepository.findOne(id);

    if (!course) {
      throw new NotFoundException(`Course Id ${id} not found`);
    }

    return this.courseRepository.remove(course);
  }
}
