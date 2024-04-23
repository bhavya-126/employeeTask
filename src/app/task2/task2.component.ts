import { Component } from '@angular/core';
import { UserListService } from '../Services/user-list.service';
import { User } from '../Services/user';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
  providers: [ UserListService],
})
export class Task2Component {
  constructor(private userList: UserListService) {}
  users: User[] = this.userList.getUsers();
}
