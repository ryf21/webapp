import { Airline } from './airline.entity';
import { AirlinesService } from './airlines.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';


@Controller('airlines')
export class AirlinesController {
    constructor(private readonly airlinesService: AirlinesService) {}

    @Get()
      findAll() {
          return this.airlinesService.findAll();
      }

    @Get(':type')
      findAllType(@Param('type') type: string) {
          return this.airlinesService.findAllType(type);
      }  

    @Get(':id')
      findOne(@Param('id') id: string) {
          return this.airlinesService.findOne(+id);
      }

    @Put(':id')
      update(@Param('id') id: string, @Body() updateAirline: Airline) {
          return this.airlinesService.update(+id, updateAirline);
      }

    @Post()
      create(@Body() createAirline: Airline) {
          return this.airlinesService.create(createAirline);
      }

    @Delete(':id')
      remove(@Param('id') id: string) {
          return this.airlinesService.remove(+id);
      }

    

}
