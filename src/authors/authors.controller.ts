// authors.controller.ts

import { AuthorsService } from './authors.service';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import {Author} from "./author.entity";


@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) {}

    @Get()
    findAll() {
        return this.authorsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.authorsService.findOne(+id);
    }

    @Get('fullname/:fullname')
    findByFullname(@Param('fullname') fullname: string) {
        return this.authorsService.findByFullname(fullname);
    }

    @Get('position/:position')
    findByPosition(@Param('position') position: string) {
        return this.authorsService.findByPosition(position);
    }

    @Get('grade/:grade')
    findByGrade(@Param('grade') grade: string) {
        return this.authorsService.findByGrade(grade);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateAuthor: Author) {
        return this.authorsService.update(+id, updateAuthor);
    }

    @Post()
    create(@Body() createAuthor: Author) {
        return this.authorsService.create(createAuthor);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.authorsService.remove(+id);
    }

    @Put('fullname/:fullname')
    updateByFullname(@Param('fullname') fullname: string, @Body() updateAuthor: Author) {
        return this.authorsService.updateByFullname(fullname, updateAuthor);
    }

}
