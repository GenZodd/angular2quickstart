import { Component } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';

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
 
  clickIt()  {
    this.h1Color = this.h1Color === "purple" ? "blue" : "purple";
  }
}
