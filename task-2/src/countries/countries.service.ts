import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Country } from "./country.entity";

@Injectable()
export class SouvenirsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(country: Country) {
        this.datasourceService.getSouvenirs().push(country);
        return country;
    }

    findOne(id: number) {
    return this.datasourceService
      .getSouvenirs()
      .find((country) => country.id === id);
    }

    findAll(): Country[] {
        return this.datasourceService.getSouvenirs();
    }

    update(id: number, updatedSouvenir: Country) {
        const index = this.datasourceService
        .getSouvenirs()
        .findIndex((country) => country.id === id);
        this.datasourceService.getSouvenirs()[index] = updatedSouvenir;
        return this.datasourceService.getSouvenirs()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getSouvenirs()
        .findIndex((country) => country.id === id);
        this.datasourceService.getSouvenirs().splice(index, 1);
        return HttpStatus.OK;
    }




}

