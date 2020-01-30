import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ClientService } from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';

  role:any;
  flag:boolean = false;
  myDetails:any;
  constructor(private clientService:ClientService,
              private authService:AuthService,
              private router:Router) { 

    this.flag=localStorage['flag'];
    console.log("adasd"+this.flag);
  }

  ngOnInit() {
    document.body.classList.add('homebg');
this.role = localStorage['role'];
console.log("role "+this.role);
  }

  logout()
  {
    console.log("in logout");
    console.log("flag"+this.flag);
    this.authService.SignOut();
    this.flag=localStorage['flag'];
    console.log(this.flag);
    this.router.navigate(['/home']);
  }
  login()
  {
    this.flag=localStorage['flag'];
    this.role=localStorage['role'];
    this.myDetails = localStorage['myDetails'];
    console.log("after"+this.role)
    console.log("after"+this.flag)
  }
}
