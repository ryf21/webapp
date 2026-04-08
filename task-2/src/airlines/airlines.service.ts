import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Airline } from "./airline.entity";

@Injectable()
export class AirlinesService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(airline: Airline) {
        this.datasourceService.getAirlines().push(airline);
        return airline;
    }

    findOne(id: number) {
    return this.datasourceService
      .getAirlines()
      .find((airline) => airline.id === id);
    }

    findAll(): Airline[] {
        return this.datasourceService.getAirlines();
    }

    findAllType(type: string): Airline[] {
        // Фильтруем экспонаты, оставляя только те, у которых свойство 'type' совпадает с искомым
        return this.findAll().filter(airline => airline.type === type);
    }

    update(id: number, updatedAirline: Airline) {
        const index = this.datasourceService
        .getAirlines()
        .findIndex((airline) => airline.id === id);
        this.datasourceService.getAirlines()[index] = updatedAirline;
        return this.datasourceService.getAirlines()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getAirlines()
        .findIndex((airline) => airline.id === id);
        this.datasourceService.getAirlines().splice(index, 1);
        return HttpStatus.OK;
    }




}

