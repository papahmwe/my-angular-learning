import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return [
      { id: 1, name: 'Zen', age: 29 },
      { id: 2, name: 'Ye Htet Aung', age: 28 },
      { id: 3, name: 'Pa Pa', age: 23 },
      { id: 4, name: 'Pa Pa Hmwe', age: 20 },
    ];
  }
}
