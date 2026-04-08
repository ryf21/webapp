import { Passenger } from './passenger.entity';
import { PassengersService } from './passengers.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';


@Controller('passengers')
export class PassengersController {
    constructor(private readonly passengersService: PassengersService) {}

    @Get()
      findAll() {
          return this.passengersService.findAll();
      }

    @Get(':id')
      findOne(@Param('id') id: string) {
          return this.passengersService.findOne(+id);
      }

    @Put(':id')
      update(@Param('id') id: string, @Body() updatePassenger: Passenger) {
          return this.passengersService.update(+id, updatePassenger);
      }

    @Post()
      create(@Body() createPassenger: Passenger) {
          return this.passengersService.create(createPassenger);
      }

    @Delete(':id')
      remove(@Param('id') id: string) {
          return this.passengersService.remove(+id);
      }

    

}
