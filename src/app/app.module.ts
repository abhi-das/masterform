import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppDataService } from './services/app.data.service';
import { AppRoutingModule } from './app.routing';

import { ContactpageComponent } from './contactpage/contactpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';

import { HttpClientModule } from '@angular/common/http';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component';

import { D3Service } from 'd3-ng2-service';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ContactpageComponent,
    HomepageComponent,
    ServicespageComponent,
    BarChartComponent,
    PieChartComponent
  ],
  providers: [ AppDataService, D3Service ],
  bootstrap: [AppComponent]
})
export class AppModule { }
