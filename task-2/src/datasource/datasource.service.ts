import { Injectable } from "@nestjs/common";
import { Passenger } from "src/passengers/passenger.entity";
import { Airline } from "src/airlines/airline.entity";
import { Country } from "src/countries/country.entity";
@Injectable() 
export class DatasourceService {
    private passengers: Passenger[] = []

    getPassengers(): Passenger[] {
        return this.passengers;
    }

    private airlines: Airline[] = []

    getAirlines(): Airline[] {
        return this.airlines;
    }

    private countries: Country[] = []

    getSouvenirs(): Country[] {
        return this.countries;
    }
}