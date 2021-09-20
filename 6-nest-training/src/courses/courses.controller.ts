import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Patch(':id')
  updatePartial(@Param('id') id: number, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.coursesService.remove(id);
  }
}
