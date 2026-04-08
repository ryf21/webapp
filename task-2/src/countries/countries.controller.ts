import { Country } from './country.entity';
import { SouvenirsService } from './countries.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';


@Controller('countries')
export class SouvenirsController {
    constructor(private readonly souvenirsService: SouvenirsService) {}

    @Get()
      findAll() {
          return this.souvenirsService.findAll();
      }

    @Get(':id')
      findOne(@Param('id') id: string) {
          return this.souvenirsService.findOne(+id);
      }

    @Put(':id')
      update(@Param('id') id: string, @Body() updateSouvenir: Country) {
          return this.souvenirsService.update(+id, updateSouvenir);
      }

    @Post()
      create(@Body() createSouvenir: Country) {
          return this.souvenirsService.create(createSouvenir);
      }

    @Delete(':id')
      remove(@Param('id') id: string) {
          return this.souvenirsService.remove(+id);
      }

    

}
