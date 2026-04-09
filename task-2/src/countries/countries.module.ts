import { Module } from "@nestjs/common";
import { Country } from "./country.entity";
import { DatasourceModule } from "src/datasource/datasource.module";
import { CountriesController } from "./countries.controller";
import { CountriesService } from "./countries.service";
@Module({
    controllers: [CountriesController],
    providers:[CountriesService],
    imports: [DatasourceModule]
})
export class CountriesModule{}