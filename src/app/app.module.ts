import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { CurEmployeeComponent } from './employee/cur-employee/cur-employee.component';
import { OldEmployeeComponent } from './employee/old-employee/old-employee.component';
import { SetBackgroundDirective } from './CustomDirecives/set-background.directive';
import { HighlightDirective } from './CustomDirecives/highlight.directive';
import { MobileValidatorDirective } from './CustomDirecives/mobile-validator.directive';
import { AadhaarNoDirective } from './CustomDirecives/aadhaar-no.directive';
import { CustomIfDirective } from './CustomDirecives/custom-if.directive';
import { UsingPipesComponent } from './using-pipes/using-pipes.component';
import { FilterPipe } from './CustomPipes/filter.pipe';
import { CustomForDirective } from './CustomDirecives/custom-for.directive';
import { Task2Component } from './task2/task2.component';
import { FilterTypePipe } from './CustomPipes/filter-type.pipe';
import { NamePrefixPipe } from './CustomPipes/name-prefix.pipe';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//defining routes
// const routes: Routes = [
//   { path: '', component: EmployeeComponent },
//   { path: 'EmpTask', component: EmployeeComponent },
//   { path: 'Task2', component: Task2Component },
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    CurEmployeeComponent,
    OldEmployeeComponent,
    SetBackgroundDirective,
    HighlightDirective,
    MobileValidatorDirective,
    AadhaarNoDirective,
    CustomIfDirective,
    FilterPipe,
    CustomForDirective,
    Task2Component,
    FilterTypePipe,
    NamePrefixPipe,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Module1Module,
    Module2Module,
    UsingPipesComponent,
    RouterModule.forRoot(routes),
  ],
  providers: [  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
