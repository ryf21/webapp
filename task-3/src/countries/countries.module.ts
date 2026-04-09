import { Module } from "@nestjs/common";
import { Country } from "./country.entity";
import { Passenger } from "src/passengers/passenger.entity";
import { DatasourceModule } from "src/datasource/datasource.module";
import { CountriesController } from "./countries.controller";
import { CountriesService } from "./countries.service";
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    controllers: [CountriesController],
    providers:[CountriesService],
    imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Country, Passenger]),
  ],
})
export class CountriesModule{}