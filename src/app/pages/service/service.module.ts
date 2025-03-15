import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ServiceroutingModule } from "./service-routing.module";
import { OverviewComponent } from './overview/overview.component';
import { BirthDeathComponent } from './birth-death/birth-death.component';
import { NsapComponent } from './nsap/nsap.component';
import { LicenceComponent } from './licence/licence.component';
import { ConstructionOccupanciesComponent } from './construction-occupancies/construction-occupancies.component';


@NgModule({
    declarations: [
    OverviewComponent,
    BirthDeathComponent,
    NsapComponent,
    LicenceComponent,
    ConstructionOccupanciesComponent
  ],
    imports: [CommonModule, ServiceroutingModule],
})
export class ServiceModule { }