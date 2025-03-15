import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProjectsroutingModule } from "./projects-routing.module";
import { BeautificationComponent } from './beautification/beautification.component';
import { ConstructionComponent } from './construction/construction.component';
import { DevelopmentAndBeautificationComponent } from './development-and-beautification/development-and-beautification.component';
import { ParkingComponent } from './parking/parking.component';
import { PmjayComponent } from './pmjay/pmjay.component';
import { RestorationComponent } from './restoration/restoration.component';
import { SportsComplexComponent } from './sports-complex/sports-complex.component';
import { UndergroundComponent } from './underground/underground.component';


@NgModule({
    declarations: [
    BeautificationComponent,
    ConstructionComponent,
    DevelopmentAndBeautificationComponent,
    ParkingComponent,
    PmjayComponent,
    RestorationComponent,
    SportsComplexComponent,
    UndergroundComponent
  ],
    imports: [CommonModule, ProjectsroutingModule],
})
export class ProjecstModule { }