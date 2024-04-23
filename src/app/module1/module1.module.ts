import { NgModule } from '@angular/core';
import { Table1Component } from './table1/table1.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Table1Component],
  exports: [Table1Component],
  imports: [CommonModule, FormsModule],
  providers: [],
})
export class Module1Module {}
