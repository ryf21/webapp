import { Passenger } from 'src/passengers/passenger.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  continent: string;
  @Column()
  type: string;
  @ManyToMany((type) => Passenger, (passenger) => passenger.countries)
  @JoinTable({
    name: 'passenger_country',
    joinColumn: { name: 'country_id' },
    inverseJoinColumn: { name: 'passenger_id' },
  })
  passengers: Passenger[];
}
