import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { SongsService } from "./songs.service";
import { CreateSongDTO } from './dto/create-song-dto';
@Controller('songs')
export class SongsController {
    constructor (private songService: SongsService){}

    @Post()
    create(@Body() createSongDTO: CreateSongDTO) {
        return this.songService.create(createSongDTO);
    }

    @Get()
    findAll() {
        return this.songService.findAll();
    }

    @Get(":id")
    findOne() {
        return "Showing song based on id!!"
    }

    @Put(":id")
    update() {
        return "Update song based on id!!"
    }

    @Delete(":id")
    delete() {
        return "Delete song based on id!!"
    }
}
