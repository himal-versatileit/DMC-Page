import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { PlacesComponent } from './pages/places/places.component';
import { DescriptionComponent } from './pages/description/description.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CouncilComponent } from './pages/council/council.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "places", component: PlacesComponent },
  { path: "description", component: DescriptionComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "council", component: CouncilComponent },
  { path: "privacy", component: PrivacyComponent },
  {
    path: "citizen", loadChildren: () => import("./pages/citizen/citizen.module").then(m => m.CitizenModule)
  },
  {
    path: "information", loadChildren: () => import("./pages/information/information.module").then(m => m.InformationModule)
  },
  {
    path: "service", loadChildren: () => import("./pages/service/service.module").then(m => m.ServiceModule)
  },
  {
    path: "projects", loadChildren: () => import("./pages/projects/projects.module").then(m => m.ProjecstModule)
  },
  {
    path: "schemes", loadChildren: () => import("./pages/schemes/schemes.module").then(m => m.SchemesModule)
  },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: "reload", scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
