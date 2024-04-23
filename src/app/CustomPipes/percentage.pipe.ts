import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage', 
})
export class PercentagePipe implements PipeTransform {

  transform(value: number, decimal:number = 0

  ): string {
    return (value*100).toFixed(decimal);
  }

}
