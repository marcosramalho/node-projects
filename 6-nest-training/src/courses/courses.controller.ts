import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Lista de cursos';
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `Curso #${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
