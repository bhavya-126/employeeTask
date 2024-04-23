import { Pipe, PipeTransform } from '@angular/core';
interface empType {
  id: number;
  name: string;
  email: string;
  mobile: string;
}
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    employees: empType[],
    searchTxt: string,
  ): empType[] {
    if (!searchTxt) {
      return employees;
    } else {
      return employees.filter((emp) => 
        emp.email.includes(searchTxt) || emp.name.includes(searchTxt)
      );
    }
  }
}
