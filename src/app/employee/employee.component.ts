import { Component } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees: Employee[] = [];

  add(firstName: string, lastName: string, age: number): void {
   
    let employee = new Employee(firstName, lastName, age);
    if (this.isExit(employee)) {
      this.employees.push(employee);
      this.sort();
    } else {
      alert('This Employee is Added');
    }
  }


  isExit(employee: Employee): boolean {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].firstName == employee.firstName && this.employees[i].lastName == employee.lastName)
        return false;
    }
    return true;
  }

  delete(index: number): void {
    this.employees.splice(index, 1);
  }

  sort():Employee[]{
    return this.employees.sort((e1, e2) => e1.age - e2.age);
  }
}
