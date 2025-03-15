import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacesComponent } from './pages/places/places.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DescriptionComponent } from './pages/description/description.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CouncilComponent } from './pages/council/council.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MatIconModule } from '@angular/material/icon';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    ProjectsComponent,
    DescriptionComponent,
    HomeComponent,
    AboutUsComponent,
    CouncilComponent,
    ContactUsComponent,
    PrivacyComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
