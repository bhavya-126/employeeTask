import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  users: User[] = [
    new User('John', 18, 'male'),
    new User('Aaisha', 28, 'female'),
    new User('Gorge', 45, 'male'),
    new User('Neha', 5, 'female'),
    new User('Steave', 50, 'male'),
  ];
  getUsers() {
    return this.users;
  }
  createUser(name:string, age: number, gender: string){
    let newUser = new User(name, age, gender);
    this.users.push(newUser);
  }
  constructor() {}
}
