import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Users} from '../../app/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user1 =  new Users('')
  user2 : any
  

  constructor(private user: UsersService) { }

  ngOnInit() { 
    
}

  searchUsername(){
    this.user.updateUser(this.user1.username)

    return this.user.getUsers().subscribe(data => {
      this.user2 = data
      console.log(this.user2)
    })
    
    } 

}
