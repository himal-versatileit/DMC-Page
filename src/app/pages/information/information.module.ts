import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InformationroutingModule } from "./information-routing.module";
import { CircularComponent } from './circular/circular.component';


@NgModule({
    declarations: [    
    CircularComponent
  ],
    imports: [CommonModule, InformationroutingModule],
})
export class InformationModule { }