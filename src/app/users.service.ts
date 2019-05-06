import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = "https://api.github.com/users/"
  username: string;
  api_key ='?access_token=cae8139569a21bb8edfd467a4072340ea3330013'

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.apiUrl+this.username+this.api_key)
  }

  updateUser(info){
    this.username = info
    
    
  }

  
}
