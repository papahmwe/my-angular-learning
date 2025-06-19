import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  employee: any[] = [];

  // Dependency Injection
  // Please give me an object of EmployeeService.

  constructor(private employeeService: EmployeeService) {}

  // To load data from a service
  ngOnInit() {
    this.employee = this.employeeService.getEmployees();
  }

  // @Input() parentData: string | undefined;

  // @Output() childEvent = new EventEmitter();
  // // myText: string = 'Fill the blanks...';
  // // disabledBool: boolean = false;

  // // myClickFun() {
  // //   return (this.disabledBool = !this.disabledBool);
  // // }

  // eventEmit() {
  //   return this.childEvent.emit("Hello, I'm from Home.");
  // }
}
