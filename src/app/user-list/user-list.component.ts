import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit {
  users: any[] = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(data => {
        console.log(data);
        this.users = data.data; // Assign the fetched data to the users property
      });
  }
  
}
