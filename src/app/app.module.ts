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
    ServicespageComponent
  ],
  providers: [ AppDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
