import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = "https://api.github.com/users/"
  username: string; 

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.apiUrl+this.username+environment.api_key)
  }

  updateUser(info){
    this.username = info
    
    
  }

  
}
