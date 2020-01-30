import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// role:any;
//   flag:boolean = false;
//   constructor(private clientService:ClientService,
//               private authService:AuthService,
//               private router:Router) { 

//     this.flag=localStorage['flag'];
//     console.log("adasd"+this.flag);
//   }

  ngOnInit() {
//     document.body.classList.add('homebg');
// this.role = localStorage['role'];
// console.log("role "+this.role);
   }

//   logout()
//   {
//     console.log("in logout");
//     console.log("flag"+this.flag);
//     this.authService.SignOut();
//     console.log(this.flag);
//     this.router.navigate(['/home']);
//   }
}
