import { Module } from "@nestjs/common";
import { Passenger } from "./passenger.entity";
import { Country } from "src/countries/country.entity";
import { Airline } from "src/airlines/airline.entity";
import { DatasourceModule } from "src/datasource/datasource.module";
import { PassengersController } from "./passengers.controller";
import { PassengersService } from "./passengers.service";
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    controllers: [PassengersController],
    providers:[PassengersService],
    imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Passenger, Country, Airline]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})

export class PassengersModule{}