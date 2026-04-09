import { Module } from '@nestjs/common';
import { PassengersModule } from './passengers/passengers.module';
import { AirlinesModule } from './airlines/airlines.module';
import { DatasourceModule } from './datasource/datasource.module';
import { CountriesModule } from './countries/countries.module';
@Module({
  imports: [PassengersModule, AirlinesModule , CountriesModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
