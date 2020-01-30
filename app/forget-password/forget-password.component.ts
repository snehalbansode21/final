import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  userDetails: any
  user:any
  email : any
  constructor(private clientService:ClientService) { }

  ngOnInit() {
  }

  SendEmail(entireData)
  {
    let userDetails = entireData.form.value;
    console.log(userDetails)
      userDetails.message = "http://localhost:4200/about-us";
      userDetails.subject = "Your Password";
      let obResult = this.clientService.sendEmail(userDetails);
      obResult.subscribe((data)=>{
        console.log(data);
      })
}
}
