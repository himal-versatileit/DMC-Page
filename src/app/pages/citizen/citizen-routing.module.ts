import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaxComponent } from "./tax/tax.component";
import { CitizenChartersComponent } from "./citizen-charters/citizen-charters.component";


const routes: Routes = [
    { path: "charters", component: CitizenChartersComponent },
    { path: "tax", component: TaxComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CitizenRoutingModule { }