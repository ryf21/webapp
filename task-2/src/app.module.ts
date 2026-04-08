import { Module } from '@nestjs/common';
import { PassengersModule } from './passengers/passengers.module';
import { AirlinesModule } from './airlines/airlines.module';
import { DatasourceModule } from './datasource/datasource.module';
import { SouvenirsModule } from './countries/countries.module';
@Module({
  imports: [PassengersModule, AirlinesModule , SouvenirsModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
