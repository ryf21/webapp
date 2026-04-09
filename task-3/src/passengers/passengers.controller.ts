import { Passenger } from './passenger.entity';
import { PassengersService } from './passengers.service';
import { PassengerDto } from './dto/passenger.dto';
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

    @Get('incomplete')
      findIncomplete() {
          this.passengersService.findIncomplete();
      }

    @Put(':id')
      update(@Param('id') id: string, @Body() updatePassenger: Passenger) {
          return this.passengersService.update(+id, updatePassenger);
      }

    @Post()
      create(@Body() passengerDto: PassengerDto): Promise<Passenger> {
          return this.passengersService.create(passengerDto);
      }

    @Delete(':id')
      remove(@Param('id') id: string) {
          return this.passengersService.remove(+id);
      }

    

}
