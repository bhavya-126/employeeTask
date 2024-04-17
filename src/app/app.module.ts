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
    AadhaarNoDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
