import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BeautificationComponent } from "./beautification/beautification.component";
import { ConstructionComponent } from "./construction/construction.component";
import { DevelopmentAndBeautificationComponent } from "./development-and-beautification/development-and-beautification.component";
import { ParkingComponent } from "./parking/parking.component";
import { PmjayComponent } from "./pmjay/pmjay.component";
import { RestorationComponent } from "./restoration/restoration.component";
import { SportsComplexComponent } from "./sports-complex/sports-complex.component";
import { UndergroundComponent } from "./underground/underground.component";
import { ProjectsComponent } from "./projects.component";


const routes: Routes = [
    { path: "", component: ProjectsComponent },
    { path: "beautification", component: BeautificationComponent },
    { path: "construction", component: ConstructionComponent },
    { path: "development", component: DevelopmentAndBeautificationComponent },
    { path: "parking", component: ParkingComponent },
    { path: "pmjay", component: PmjayComponent },
    { path: "restoration", component: RestorationComponent },
    { path: "sports-complex", component: SportsComplexComponent },
    { path: "underground", component: UndergroundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProjectsroutingModule { }