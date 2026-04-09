import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Injectable, NotFoundException } from "@nestjs/common";
import { Airline } from "./airline.entity";
import { AirlineDto } from './dto/airline.dto';
import { IncompleteAirlineDto } from './dto/incomplete-airline.dto';

@Injectable()
export class AirlinesService {
    constructor(
        @InjectRepository(Airline)
        private readonly airlineRepository: Repository<Airline>,
    ) {}

    async create(airlineDto: AirlineDto): Promise<Airline>
    {
        const airline = this.airlineRepository.create();
        airline.name = airlineDto.name;
        airline.type = airlineDto.type;
        await this.airlineRepository.save(airline);
        return airline
    }

    async findAll(): Promise<Airline[]> {
        const airlines = await this.airlineRepository.find({});
        return airlines;
    }

    async findOne(id: number): Promise<Airline> {
        const airline = await this.airlineRepository.findOne({
        where: { id }
        });
        if (!airline) {
            throw new NotFoundException(`Airline with id ${id} not found`);
        }
        return airline
    }

    async findIncomplete(): Promise<IncompleteAirlineDto[]> {
        const airlines = await this.airlineRepository.find();
        const incompleteAirlines: IncompleteAirlineDto[] = airlines.map((airline) =>
        {
            const incompleteAirline = new IncompleteAirlineDto();
            incompleteAirline.id = airline.id;
            incompleteAirline.name = airline.name;
            return incompleteAirline;
        });
        return incompleteAirlines;
    }

    async update(id: number, updatedAirline: Airline) {
        const airline = await this.airlineRepository.findOne({ where: { id } });
        if (!airline) {
            throw new NotFoundException(`Airline with id ${id} not found`);
        }
        airline.name = updatedAirline.name;
        airline.type = updatedAirline.type;
        airline.img_path = updatedAirline.img_path;
        await this.airlineRepository.save(airline);
        return airline;
    }

    remove(id: number) {
        this.airlineRepository.delete({ id });
    }
}