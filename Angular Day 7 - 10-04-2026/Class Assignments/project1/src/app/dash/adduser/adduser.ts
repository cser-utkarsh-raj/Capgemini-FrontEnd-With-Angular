import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../services/user';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adduser.html',
  styleUrl: './adduser.css',
})
export class Adduser {
  userData = {
    name: '',
    role: '',
    image: '',
  };
  userService = inject(User);
  handleSubmit() {
    console.log(this.userData);
    this.userService.addUser(this.userData);
  }
}
