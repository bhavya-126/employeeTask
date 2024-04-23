import { Component, Input } from '@angular/core';
import { User } from 'src/app/Services/user';
import { UserListService } from 'src/app/Services/user-list.service';


@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component {
  constructor(private userList: UserListService){}
  @Input()
  users:User[]= this.userList.getUsers();
}
