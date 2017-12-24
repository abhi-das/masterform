import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppDataService } from './services/app.data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    HttpModule
  ],
  providers: [ AppDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
