import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { PhonePipe } from './phone.pipe';
import { HouseMapperComponent } from './house-mapper/house-mapper.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    }),
    RouterModule.forRoot([
      { path: '', component: ClientsComponent },
      // { path: '', component: ProductListComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'clients/:clientId', component: ClientDetailsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ClientsComponent,
    ClientDetailsComponent,
    PhonePipe,
    HouseMapperComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/