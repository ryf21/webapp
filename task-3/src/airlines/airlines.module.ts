import { Module } from '@nestjs/common';
import { Airline } from './airline.entity';
import { Passenger } from "src/passengers/passenger.entity";
import { DatasourceModule } from "src/datasource/datasource.module";
import { AirlinesController } from "./airlines.controller";
import { AirlinesService } from "./airlines.service";
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  controllers: [AirlinesController],
  providers:[AirlinesService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Airline, Passenger]),
  ],
})

export class AirlinesModule {}
