import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AtalMissionComponent } from "./atal-mission/atal-mission.component";
import { PmayComponent } from "./pmay/pmay.component";
import { SwachBharatComponent } from "./swach-bharat/swach-bharat.component";
import { NsapComponent } from "./nsap/nsap.component";
import { MpladComponent } from "./mplad/mplad.component";


const routes: Routes = [
    { path: "atal-mission", component: AtalMissionComponent },
    { path: "pmay", component: PmayComponent },
    { path: "swach-bharat", component: SwachBharatComponent },
    { path: "nsap", component: NsapComponent },
    { path: "mplad", component: MpladComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SchemesroutingModule { }