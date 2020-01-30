import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdetails = {"email":"", "password":"" };
client :any;
  constructor(private authService : AuthService,
              private service:ClientService,
              private router : Router,
              private app : AppComponent) 
    {         }


  ngOnInit() {
    
  }

 
  message = "";

  SignIn()
  {
    console.log("in signin");

    console.log("in login()")
    if (this.userdetails.email.length == 0) {
      alert('enter email');
    } else if (this.userdetails.password.length ==0) {
      alert('enter password');
    }
    
    let observableResult = this.service.Check(this.userdetails);
    observableResult.subscribe((result)=>{
      this.client = result;
      console.log(this.client);
      console.log("role"+this.client.role);
     if(this.client.role == 'CLIENT')
      {
        sessionStorage['login_status'] = '1';
        localStorage.setItem('flag','true');
        localStorage.setItem('role',this.client.role);
        localStorage.setItem('myDetails',JSON.stringify(this.client));
        this.router.navigate(['/mydetails']);
      }
      else if(this.client.role == 'ADMIN')
      {
        console.log("in role admin")
        sessionStorage['login_status'] = '1';
        localStorage.setItem('flag','true');
        localStorage.setItem('role',this.client.role);
        localStorage.setItem('myDetails',JSON.stringify(this.client));
        this.router.navigate(['/home']);
      }
      else if(this.client.role == 'MANAGER')
      {
        sessionStorage['login_status'] = '1';
        localStorage.setItem('flag','true');
        localStorage.setItem('role',this.client.role);
        localStorage.setItem('myDetails',JSON.stringify(this.client));
        this.router.navigate(['/home']);
      }
      this.app.login();
      return true;
    }),(error)=>{
      console.log(error);
      return false;
      
    }
  }
  getClinetInfo()
  {
    console.log("client.."+this.client);
    return this.client;
  }

}
