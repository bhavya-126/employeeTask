import { Component, Input } from '@angular/core';
import { User } from 'src/app/Services/user';
import { UserListService } from 'src/app/Services/user-list.service';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css'],
  providers:[]
})
export class Table1Component {
  constructor(private userList:UserListService){}
  @Input()
  users:User[] = this.userList.getUsers();
  
  addRecord() {
    this.userList.createUser("OOPs", 4, "male")
  }
}
