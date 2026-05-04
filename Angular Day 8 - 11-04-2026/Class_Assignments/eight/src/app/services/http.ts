import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GitUserType } from '../types/gitUser';
import { PlatziUserType } from '../types/platziUserType';
import { PlatziLogin } from '../types/platziLogin';


@Injectable({
  providedIn: 'root',
})
export class Http {
  httpClient=inject(HttpClient);
  baseurl:string=' https://api.escuelajs.co/api/v1'; 
  

  getUsers(){
    return this.httpClient.get<GitUserType>(`${this.baseurl}/users`);
  }

  addUser (user :PlatziUserType){
        return this.httpClient.post<PlatziUserType>(`${this.baseurl}/users`, user);
    }

    loginUser (user : PlatziLogin){
        return this.httpClient.post<PlatziLogin>(`${this.baseurl}/auth/login`, user);
    }
}
