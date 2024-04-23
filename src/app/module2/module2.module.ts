import { NgModule } from '@angular/core';
import { Table2Component } from './table2/table2.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PercentagePipe } from '../CustomPipes/percentage.pipe';

@NgModule({
  declarations: [Table2Component, PercentagePipe],
  exports: [Table2Component, PercentagePipe],
  imports: [CommonModule, FormsModule],
  providers: [],
})
export class Module2Module {}
