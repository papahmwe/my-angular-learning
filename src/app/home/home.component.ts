import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  myText: string = 'Fill the blanks...';
  disabledBool: boolean = false;

  myClickFun() {
    return (this.disabledBool = !this.disabledBool);
  }
}
