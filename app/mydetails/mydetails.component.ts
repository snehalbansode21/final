import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit {

  constructor( private authService : AuthService,
               private clientService : ClientService,
               private router : Router) {
               
                }

  myDetails : any
  addr:boolean = false;
  ngOnInit() {
    this.myDetails = JSON.parse(localStorage.getItem('myDetails'));
    console.log(this.myDetails) 
    console.log(this.myDetails.addr);
   // localStorage.setItem('addrId',JSON.stringify(this.myDetails.addr));
   if(this.myDetails.addr !== null)
   {
     localStorage.setItem('addr','true')
     
   }
   this.addr = localStorage['addr']
  }

  onAdd(entireData)
  {
    console.log("In onAdd() method"); 
    let addr = entireData.form.value;
    console.log(addr);
    let observableResult =  this.clientService.addAddress(this.myDetails.userId, addr );
    observableResult.subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/bookanevent']);
    })
  }

}
