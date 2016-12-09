import { Component } from '@angular/core';
import { CustomerComponent } from './customer/customer.component'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  entryComponents: [CustomerComponent]  
})
export class AppComponent  
{ 
  name = 'Todd';
  title = 'Angular'; 
  h1Color = 'purple';
  customers = [
    {id: 1, name: 'ward'},
    {id: 1, name: 'jim'},
    {id: 1, name: 'bill'},
    {id: 1, name: 'suzie'},
    {id: 1, name: 'jack'}
  ];
  
  clickIt()  {
    this.h1Color = this.h1Color === "purple" ? "blue" : "purple";
  }
}
