import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCATION_INITIALIZED } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
 
  
  constructor(public http:HttpClient) { }

 

  Check(userdetails) 
  {
    console.log("in check")
    //console.log(userdetails)
    return this.http.post("http://localhost:8080/Day1.1/user/login",userdetails);
  }
  listFeedback()
  {
    return this.http.get("http://localhost:8080/Day1.1/client/listfeedback");
  }
  addAddress(userId, addr)
  {
    return this.http.put("http://localhost:8080/Day1.1/client/update/" + userId, addr);
  //return this.helper.put("http://localhost:9898/emps/" + empObj.No ,empObj);
  }
  insertUser(user)
  {
    return this.http.post("http://localhost:8080/Day1.1/client/register" ,user);
  }
  bookAnEvent(event)
  {
    return this.http.post("http://localhost:8080/Day1.1/event/bookanevent/"+ 
                           event.userId + event.eventDescId + event.locationId, event);
  }
  getAllEventDesc()
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listeventdesc");
  }
  getAllVenueCity()
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listvenuecity")
  }
  getLocationListByVenueCityId(venueCityId)
  {
    return this.http.get("http://localhost:8080/Day1.1/client/listlocationbyvenuecityid/"+venueCityId)
  }
  insertFeedback(userId, feedback)
  {
    return this.http.post("http://localhost:8080/Day1.1/client/insertfeedback/"+userId, feedback)
  }
  getUser(userDetails) 
  {
    return this.http.post("http://localhost:8080/Day1.1/user/forgetpassword",userDetails);
  }
  sendEmail(email) 
  {
    return this.http.post("http://localhost:8080/Day1.1/email",email);
  }
  getUserByPassword(value) {
    return this.http.get("http://localhost:8080/Day1.1/user/getuserbypassword",value);
  }
}

 