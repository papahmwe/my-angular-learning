import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular learning';

  displayVal = false;
  displayColor = 'purple';
  displayArr = [1, 2, 3, 4, 5, 6, 7];

  greeting() {
    return 'Hello' + ' ' + this.title;
  }
}
