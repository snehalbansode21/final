import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ClientService } from './client.service';
import { AppComponent } from './app.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
{
  client : any;
  constructor(private router : Router,public service : ClientService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) 
  {
    if(this.IsLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['login']);
      return false;
    }
  }

  IsLoggedIn()
  {
     if(window.sessionStorage.getItem("active")!=null && 
        window.sessionStorage.getItem("active")=="1")
        {
          return true;
        }
        return false;
  }
 
 
  SignOut()
  {
    console.log("in signout");
    window.sessionStorage.setItem("active","0");
    localStorage.setItem("flag","false");
  }
  
}
