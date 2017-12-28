import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { PetService } from './services/pet.service';
import { StoreService } from './services/store.service';
import { UserService } from './services/user.service';

/**
 * Module that provides instances for all API services
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
   PetService,
   StoreService,
   UserService
  ],
})
export class ApiModule { }
