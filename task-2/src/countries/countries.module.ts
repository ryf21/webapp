import { Module } from "@nestjs/common";
import { Country } from "./country.entity";
import { DatasourceModule } from "src/datasource/datasource.module";
import { SouvenirsController } from "./countries.controller";
import { SouvenirsService } from "./countries.service";
@Module({
    controllers: [SouvenirsController],
    providers:[SouvenirsService],
    imports: [DatasourceModule]
})
export class SouvenirsModule{}