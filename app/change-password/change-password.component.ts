import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  olduser:any
  user:any
  constructor(private clientService:ClientService) { }

  ngOnInit() {
  }

  onSubmit(entireData)
  {
    let value = entireData.form.value;
     console.log(value);
     this.olduser = value.password;
     let obResult = this.clientService.getUserByPassword(this.olduser);
     obResult.subscribe((data)=>{
      this.user = data;
      console.log(this.user);
     })
  }
}
