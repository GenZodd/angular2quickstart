import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
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
