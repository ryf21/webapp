import { Passenger } from 'src/passengers/passenger.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('airlines')
export class Airline {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  type: string;
  @Column()
  img_path: string;
  @ManyToMany((type) => Passenger, (passenger) => passenger.airlines)
  @JoinTable({
    name: 'passenger_airline',
    joinColumn: { name: 'airline_id' },
    inverseJoinColumn: { name: 'passenger_id' },
  })
  passengers: Passenger[];
}
