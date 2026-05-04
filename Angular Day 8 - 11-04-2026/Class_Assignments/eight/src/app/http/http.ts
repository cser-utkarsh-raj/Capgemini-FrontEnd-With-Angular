import { Component, inject, OnInit, signal } from '@angular/core';
import { Http as HttpService } from '../services/http';
import { GitUserType } from '../types/gitUser';
import { JsonPipe } from '@angular/common';
import { PlatziUserType } from '../types/platziUserType';
import { PlatziLogin } from '../types/platziLogin';

@Component({
  selector: 'app-http',
  standalone:true,
  imports: [JsonPipe],
  templateUrl: './http.html',
  styleUrls: ['./http.css'],
})
export class Http implements OnInit {
  httpData = inject(HttpService);
  userData=signal<GitUserType[]>([]);

  ngOnInit():void{
    this.httpData.getUsers().subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.userData.set([data])
        },
        error:(errmsg)=>{
          console.log(errmsg);
        },
         complete: ()=>{
        console.log("data received succesfully")
      }
      }
    )
  }

  user:PlatziUserType={
  name: 'Tanya D',
  email: 'john.doe@example.com',
  password: 'password123',
  avatar: 'https://example.com/avatar.jpg'
  }
  
  addNewUser(){
    this.httpData.addUser(this.user).subscribe({
    next: (data)=>{
      console.log(data);
    },
    error: (err)=>{
      console.log(err);
    },
    complete: ()=>{
      console.log('data added successfully');
    }
  }); 


  }
  login : PlatziLogin = {
    email: 'john@mail.com',
    password: 'changeme'
  }

  loginUser(){
    this.httpData.loginUser(this.login).subscribe({
    next: (data)=>{
      console.log(data);
    },
    error: (err)=>{
      console.log(err);
    },
    complete: ()=>{
      console.log('login successfully');
    }           
    } );
  }

}
