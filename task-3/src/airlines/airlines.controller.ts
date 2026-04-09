import { Airline } from './airline.entity';
import { AirlinesService } from './airlines.service';
import { AirlineDto } from './dto/airline.dto';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';


@Controller('airlines')
export class AirlinesController {
    constructor(private readonly airlinesService: AirlinesService) {}

    @Get()
      findAll() {
          return this.airlinesService.findAll();
      }

    @Get(':id')
      findOne(@Param('id') id: string) {
          return this.airlinesService.findOne(+id);
      }

    @Get('incomplete')
      findIncomplete() {
          this.airlinesService.findIncomplete();
      }

    @Put(':id')
      update(@Param('id') id: string, @Body() updateAirline: Airline) {
          return this.airlinesService.update(+id, updateAirline);
      }

    @Post()
      create(@Body() airlineDto: AirlineDto): Promise<Airline> {
          return this.airlinesService.create(airlineDto);
      }

    @Delete(':id')
      remove(@Param('id') id: string) {
          return this.airlinesService.remove(+id);
      }

    

}
