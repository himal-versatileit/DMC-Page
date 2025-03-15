import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BirthDeathComponent } from "./birth-death/birth-death.component";
import { ConstructionOccupanciesComponent } from "./construction-occupancies/construction-occupancies.component";
import { NsapComponent } from "./nsap/nsap.component";
import { OverviewComponent } from "./overview/overview.component";
import { LicenceComponent } from "./licence/licence.component";


const routes: Routes = [
    { path: "birth-death", component: BirthDeathComponent },
    { path: "construction", component: ConstructionOccupanciesComponent },
    { path: "nsap", component: NsapComponent },
    { path: "overview", component: OverviewComponent },
    { path: "licence", component: LicenceComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ServiceroutingModule { }