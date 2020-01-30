import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users : any
  constructor(private service : AdminService) { }

  ngOnInit() {
    let observableResult = this.service.listUsers();
    observableResult.subscribe((data)=>{
      console.log(data)
      this.users = data;
    })
  }

}
