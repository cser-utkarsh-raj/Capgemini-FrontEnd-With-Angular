import { Injectable } from '@angular/core';
import { UserType } from '../types/usertype';

@Injectable({
  providedIn: 'root',
})
export class User {
  userData: UserType[] = [
    {
      name: 'Aditya',
      role: 'Admin',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'John',
      role: 'User',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  ];
  addUser(user: UserType) {
    this.userData.push(user);
    console.log(this.userData);
  }
}
