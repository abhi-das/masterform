import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactpageComponent } from './contactpage/contactpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';

const routes: Routes = [
  {
    path: 'home-page', component: HomepageComponent
  },
  {
  	path: 'contact-page', component: ContactpageComponent
  },
  {
  	path: 'services-page', component: ServicespageComponent
  },
  {
  	path: '', pathMatch: 'full', redirectTo: 'home-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }