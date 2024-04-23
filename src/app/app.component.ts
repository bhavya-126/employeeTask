import { Component, HostListener } from '@angular/core';
import { UserListService } from './Services/user-list.service';
import { User } from './Services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserListService],
})
export class AppComponent {
  private title = 'empTask';
  data: string[] = ['mangos', 'bananas'];
  constructor(private userList: UserListService) {
    // userList
  }
  users: User[] = this.userList.getUsers();
  log(event?: any) {
    console.log(event.target.value);
  }
  
}
