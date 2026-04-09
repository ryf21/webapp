import { Country } from 'src/countries/country.entity';
import { Airline } from 'src/airlines/airline.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('passengers') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Passenger {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  fullName: string;
  @Column()
  phone: string;
  @Column()
  arrtime: string;
  @Column()
  deptime: string;
  @Column()
  destination: string;
  @Column()
  origin: string;
  @Column()
  seat: string;
  @Column()
  class: string;
  @Column()
  meal: string;
  @ManyToMany((type) => Airline, (airline) => airline.passengers) //Создадим связь многие ко многим с сущностью airline и свяжем с полем passengers в статье
  @JoinTable({
    //join таблица с названием passenger_airline
    name: 'passenger_airline',
    joinColumn: { name: 'passenger_id' }, //для связи с идентификатором автора
    inverseJoinColumn: { name: 'airline_id' }, //для связи с идентификатором статьи
  })
  airlines: Airline[]; //объект, в котором будем автоматически получать все статьи автора
  @ManyToMany((type) => Country, (country) => country.passengers) //тоже самое для аффилиаций
  @JoinTable({
    name: 'passenger_country',
    joinColumn: { name: 'passenger_id' },
    inverseJoinColumn: { name: 'country_id' },
  })
  countries: Country[];
}
