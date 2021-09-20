import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  findAll(@Res() response) {
    return response.status(200).send('Lista de cursos');
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `Curso #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  updatePartial(@Param('id') id: number, @Body() body) {
    return `Updating partial course #${id}`;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return `updating course #${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return `deleting course #${id}`;
  }
}
