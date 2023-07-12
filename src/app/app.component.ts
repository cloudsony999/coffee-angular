import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 display()
  {
    alert('Welcome all!!!!')
  }

  uname=new FormControl('')
  updateName()
  {
    this.uname.setValue("Amitava")
  }
}
