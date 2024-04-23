import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { Task2Component } from './task2/task2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CurEmployeeComponent } from './employee/cur-employee/cur-employee.component';
import { OldEmployeeComponent } from './employee/old-employee/old-employee.component';

export const routes: Routes = [
  // { path: '', component: EmployeeComponent },
  { path: '', redirectTo: 'EmpTask', pathMatch: 'full' },
  {
      path: 'EmpTask',
      component: EmployeeComponent,
      children: [
          { path: 'CurEmp', component: CurEmployeeComponent },
          { path: 'OldEmp', component: OldEmployeeComponent },
        ],
    },
    { path: 'Task2', component: Task2Component },
    { path: '**', component: PageNotFoundComponent },
];
