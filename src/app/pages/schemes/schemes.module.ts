import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SchemesroutingModule } from "./schemes-routing.module";
import { AtalMissionComponent } from './atal-mission/atal-mission.component';
import { PmayComponent } from './pmay/pmay.component';
import { SwachBharatComponent } from './swach-bharat/swach-bharat.component';
import { NsapComponent } from './nsap/nsap.component';
import { MpladComponent } from './mplad/mplad.component';


@NgModule({
    declarations: [
    AtalMissionComponent,
    PmayComponent,
    SwachBharatComponent,
    NsapComponent,
    MpladComponent
  ],
    imports: [CommonModule, SchemesroutingModule],
})
export class SchemesModule { }