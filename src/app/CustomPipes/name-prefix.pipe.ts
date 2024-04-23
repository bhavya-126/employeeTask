import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePrefix'
})
export class NamePrefixPipe implements PipeTransform {

  transform(gender: string, ...args: unknown[]): string {
    if(gender.toLowerCase() === 'male'){
      return 'Mr.'
    }
    return 'Ms.';
  }

}
