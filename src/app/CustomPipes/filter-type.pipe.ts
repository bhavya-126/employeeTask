import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(age: number, gender:string): string {
    return ((age<18) ? 'young ' : ((age < 40) ? 'adult ' : 'old ')) + gender;
  }

}
