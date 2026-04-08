import { Module } from "@nestjs/common";
import { Passenger } from "./passenger.entity";
import { DatasourceModule } from "src/datasource/datasource.module";
import { PassengersController } from "./passengers.controller";
import { PassengersService } from "./passengers.service";
@Module({
    controllers: [PassengersController],
    providers:[PassengersService],
    imports: [DatasourceModule]
})
export class PassengersModule{}