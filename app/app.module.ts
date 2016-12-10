import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './customers/in-memory-data.service';

import { AppComponent }  from './app.component';
import { CustomerComponent } from './customer/customer.component'
import { CustomersComponent } from './customers/customers.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, CustomerComponent, CustomersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
