import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RtiComponent } from "./rti/rti.component";
import { VacancyComponent } from "./vacancy/vacancy.component";
import { SchemesComponent } from "./schemes/schemes.component";
import { TenderComponent } from "./tender/tender.component";
import { CircularComponent } from "./circular/circular.component";


const routes: Routes = [
    { path: "tender", component: TenderComponent },
    { path: "schemes", component: SchemesComponent },
    { path: "vacancy", component: VacancyComponent },
    { path: "RTI", component: RtiComponent },
    { path: "Circular&Notifications", component: CircularComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InformationroutingModule { }