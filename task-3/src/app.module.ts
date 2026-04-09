import { Module } from '@nestjs/common';
import { PassengersModule } from './passengers/passengers.module';
import { AirlinesModule } from './airlines/airlines.module';
import { DatasourceModule } from './datasource/datasource.module';
import { CountriesModule } from './countries/countries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    PassengersModule, 
    AirlinesModule, 
    CountriesModule, 
    DatasourceModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //тип подключаемой БД
      port: 5432, //порт
      username: 'education', //имя пользователя
      password: 'password', //пароль
      host: 'localhost', //хост, в нашем случае БД развернута локально
      synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
	  entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
