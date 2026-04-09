import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { DatasourceService } from "src/datasource/datasource.service";
import { Passenger } from "./passenger.entity";
import { Country } from "src/countries/country.entity";
import { Airline } from "src/airlines/airline.entity";
import { PassengerDto } from './dto/passenger.dto';
import { IncompletePassengerDto } from './dto/incomplete-passenger.dto'

@Injectable()
export class PassengersService {
    constructor(@InjectRepository(Passenger)
    private readonly passengerRepository: Repository<Passenger>, 
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>, 
    @InjectRepository(Airline)
    private readonly airlineRepository: Repository<Airline>,
) {}

    async create(passengerDto: PassengerDto): Promise<Passenger>
 {
    //получаем объект PassengerDto
    const passenger = this.passengerRepository.create(); //создаем объект Passenger из репозитория
    passenger.fullName = passengerDto.fullName; //заполняем поля объекта Passenger
    const countries = await this.countryRepository.findBy({
      id: In(passengerDto.countries),
    });
    passenger.countries = countries;
    const airlines = await this.airlineRepository.findBy({
      id: In(passengerDto.airlines),
    });
    passenger.airlines = airlines;
    await this.passengerRepository.save(passenger); //сохраняем объект Passenger в БД
    return passenger; //возвращаем объект Passenger
  }


async findOne(id: number): Promise<Passenger> {
        const passenger = await this.passengerRepository.findOne({
        where: { id },
        relations: { countries: true, airlines: true },
        });
        if (!passenger) {
            throw new NotFoundException(`Garage with id ${id} not found`);
        }
        return passenger
    }


    async findAll(): Promise<Passenger[]> {
    const passengers = await this.passengerRepository.find({
      //получаем связанные объекты
      relations: {
        countries: true,
        airlines: true,
      },
    }); //получаем массив Passenger из БД
    return passengers; //возвращаем массив Passenger
  }


    async findIncomplete(): Promise<IncompletePassengerDto[]> {
    const passengers = await this.passengerRepository.find(); //получаем массив Passenger из БД
    const incompletePassengers: IncompletePassengerDto[] = passengers.map((passenger) => {
      //преобразуем массив Passenger в массив IncompletePassengerDto
      const incompletePassenger = new IncompletePassengerDto();
      incompletePassenger.id = passenger.id;
      incompletePassenger.fullName = passenger.fullName;
      return incompletePassenger;
    });
    return incompletePassengers; //возвращаем массив IncompletePassengerDto
  }


    async update(id: number, updatedPassenger: Passenger) {
    //получаем объект Passenger для обновления по id
    const passenger = await this.passengerRepository.findOne({ where: { id } }); //получаем объект Passenger по id из БД
    if (!passenger) {
            throw new NotFoundException(`Passenger with id ${id} not found`);
        }
    passenger.fullName = updatedPassenger.fullName; //обновляем поля объекта Passenger
    passenger.phone = updatedPassenger.phone;
    passenger.arrtime = updatedPassenger.arrtime;
    passenger.deptime = updatedPassenger.deptime;
    passenger.destination = updatedPassenger.destination;
    passenger.origin = updatedPassenger.origin;
    passenger.seat = updatedPassenger.seat;
    passenger.class = updatedPassenger.class;
    passenger.meal = updatedPassenger.meal;
    passenger.countries = updatedPassenger.countries;
    passenger.airlines = updatedPassenger.airlines;
    await this.passengerRepository.save(passenger); //сохраняем объект Passenger в БД
    return passenger; //возвращаем объект Passenger
  }


    remove(id: number) {
    this.passengerRepository.delete({ id }); //удаляем объект Passenger из БД
  }





}

