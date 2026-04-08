import { Module } from '@nestjs/common';
import { Airline } from './airline.entity'
import { DatasourceModule } from "src/datasource/datasource.module";
import { AirlinesController } from "./airlines.controller";
import { AirlinesService } from "./airlines.service";
@Module({
  controllers: [AirlinesController],
  providers:[AirlinesService],
  imports: [DatasourceModule]
})
export class AirlinesModule {}
