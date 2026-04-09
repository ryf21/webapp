import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Injectable, NotFoundException } from "@nestjs/common";
import { Country } from "./country.entity";
import { CountryDto } from './dto/country.dto';
import { IncompleteCountryDto } from './dto/incomplete-country.dto';

@Injectable()
export class CountriesService {
    constructor(
        @InjectRepository(Country)
        private readonly countryRepository: Repository<Country>,
    ) {}

    async create(countryDto: CountryDto): Promise<Country>
    {
        const country = this.countryRepository.create();
        country.name = countryDto.name;
        country.continent = countryDto.continent;
        country.type = countryDto.type;
        await this.countryRepository.save(country);
        return country
    }

    async findAll(): Promise<Country[]> {
        const countries = await this.countryRepository.find({});
        return countries;
    }

    async findOne(id: number): Promise<Country> {
        const country = await this.countryRepository.findOne({
        where: { id }
        });
        if (!country) {
            throw new NotFoundException(`Country with id ${id} not found`);
        }
        return country
    }

    async findIncomplete(): Promise<IncompleteCountryDto[]> {
        const countries = await this.countryRepository.find();
        const incompleteCountries: IncompleteCountryDto[] = countries.map((country) =>
        {
            const incompleteCountry = new IncompleteCountryDto();
            incompleteCountry.id = country.id;
            incompleteCountry.name = country.name;
            return incompleteCountry;
        });
        return incompleteCountries;
    }

    async update(id: number, updatedCountry: Country) {
        const country = await this.countryRepository.findOne({ where: { id } });
        if (!country) {
            throw new NotFoundException(`Country with id ${id} not found`);
        }
        country.name = updatedCountry.name;
        country.continent = updatedCountry.continent;
        country.type = updatedCountry.type;
        await this.countryRepository.save(country);
        return country;
    }

    remove(id: number) {
        this.countryRepository.delete({ id });
    }
}