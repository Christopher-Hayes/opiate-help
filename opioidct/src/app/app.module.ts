import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { MapComponent } from './modules/map/map.component';
import { ResourcesComponent } from './modules/resources/resources.component';
import { AlternativeTreatmentComponent } from './modules/alternative-treatment/alternative-treatment.component';
import { RehabilitationComponent } from './modules/rehabilitation/rehabilitation.component';
import { EmergencyComponent } from './modules/emergency/emergency.component';
import { FamilyFriendsComponent } from './modules/family-friends/family-friends.component';
import { StatsComponent } from './modules/stats/stats.component';
import { AddictsComponent } from './modules/addicts/addicts.component';
import { CountyMapComponent } from './modules/county-map/county-map.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FaqComponent } from './modules/faq/faq.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'self-treatment', component: AlternativeTreatmentComponent },
  { path: 'rehab', component: RehabilitationComponent },
  { path: 'family-friends', component: FamilyFriendsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'addicts', component: AddictsComponent },
  { path: 'county-map', component: CountyMapComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    ResourcesComponent,
    AlternativeTreatmentComponent,
    RehabilitationComponent,
    EmergencyComponent,
    FamilyFriendsComponent,
    StatsComponent,
    AddictsComponent,
    CountyMapComponent,
    NavbarComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
