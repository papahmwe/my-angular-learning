import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  // ngOnInit() {
  //   this.dataForAbout = this.aboutData.getEmployees();
  // }
  // logInpVal(value: string) {
  //   return console.log(value);
  // }
}
