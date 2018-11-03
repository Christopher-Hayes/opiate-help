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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'alternative-treatment', component: AlternativeTreatmentComponent },
  { path: 'rehabilitation', component: RehabilitationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    ResourcesComponent,
    AlternativeTreatmentComponent,
    RehabilitationComponent
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
