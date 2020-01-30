import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clientfeedback',
  templateUrl: './clientfeedback.component.html',
  styleUrls: ['./clientfeedback.component.css']
})
export class ClientfeedbackComponent implements OnInit {


  value : any
  myDetails : any
  feedback : any
  constructor( private clientService : ClientService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.myDetails = JSON.parse(localStorage.getItem('myDetails'));
    console.log(this.myDetails.userId) 
  }

  onSendAway(entireData)
  {
  
    let feed = entireData.form.value;
    console.log(feed)


    let obResult = this.clientService.insertFeedback(this.myDetails.userId, feed)
  
    obResult.subscribe((data)=>{
      console.log(data)
      
    })
  }

}
