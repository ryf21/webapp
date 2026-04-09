import { Country } from './country.entity';
import { CountriesService } from './countries.service';
import { CountryDto } from './dto/country.dto';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';


@Controller('countries')
export class CountriesController {
    constructor(private readonly countriesService: CountriesService) {}

    @Get()
      findAll() {
          return this.countriesService.findAll();
      }

    @Get(':id')
      findOne(@Param('id') id: string) {
          return this.countriesService.findOne(+id);
      }

    @Get('incomplete')
      findIncomplete() {
          this.countriesService.findIncomplete();
      }

    @Put(':id')
      update(@Param('id') id: string, @Body() updateCountry: Country) {
          return this.countriesService.update(+id, updateCountry);
      }

    @Post()
      create(@Body() countryDto: CountryDto): Promise<Country> {
          return this.countriesService.create(countryDto);
      }

    @Delete(':id')
      remove(@Param('id') id: string) {
          return this.countriesService.remove(+id);
      }

    

}
