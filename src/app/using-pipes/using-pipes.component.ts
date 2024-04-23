import { Component } from '@angular/core';
import { Module2Module } from '../module2/module2.module';
import { PercentagePipe } from '../CustomPipes/percentage.pipe';
@Component({
  selector: 'app-using-pipes',
  templateUrl: './using-pipes.component.html',
  styleUrls: ['./using-pipes.component.css'],
  standalone: true,
  imports: [Module2Module],
})
export class UsingPipesComponent {
  marks: number = 480;
  total: number = 600;


  ngOnInit(){
    console.log( PercentagePipe.prototype.transform((this.marks/this.total), 2));
  }
}
