import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
 

  constructor(public http:HttpClient) { }

  listUsers() 
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listusers"); 
  }

  insertMgr(mgr)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/addmanager",mgr);
  }
  addAddress(mgrid,addr)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/addaddressofmanager/" +mgrid, addr);
  }
  listEventDesc() {
    return this.http.get("http://localhost:8080/Day1.1/admin/listeventdesc");
  }
  insertEventDesc(mgrId,eventDesc)
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/inserteventdesc/" +mgrId , eventDesc);
  }
  listFoodTypes() {
    return this.http.get("http://localhost:8080/Day1.1/admin/listfoodtype");
  }
  insertFoodType(eventid,food) 
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/insertfood/" +eventid , food);
  }
  listFoodSubMenu() 
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listfoodsubmenu");  
  }
  listLocations() 
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listlocation");  
  }
  insertLocation(location,locationImage)
  {
    console.log(location);
    console.log(locationImage)
      const formData = new FormData();
      formData.append("locationName",location.locationName);
      formData.append("locationCost",location.locationCost);
      formData.append("venuCityId",location.venueCity);
      formData.append("image",locationImage);
    return this.http.post("http://localhost:8080/Day1.1/admin/insertlocation/",formData);
  }
  listVenueCities() 
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/listvenuecity");
  }
  insertVenue(venue) 
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/insertvenuecity",venue);  
  }

  insertFoodSubMenu(food,foodSubMenu) 
  {
    return this.http.post("http://localhost:8080/Day1.1/admin/insertfoodsubmenu/ " +food ,foodSubMenu);
  }
  getEventDescById(eventdescno) 
  {
    console.log(eventdescno);
    return this.http.get("http://localhost:8080/Day1.1/admin/geteventdescbyid/ " +eventdescno);  
  }
  updateEventDesc(eventdesc,eventdescId,mgrId) 
  {
    return this.http.put("http://localhost:8080/Day1.1/admin//updateeventdesc/" +eventdescId +"/" +mgrId ,eventdesc);
  }
  getFoodSubMenuById(foodSubMenuId)
  {
    return this.http.get("http://localhost:8080/Day1.1/event/getfoodsubmenubyid/" +foodSubMenuId)
  }
  editFoodSubMenu(foodSubMenu,foodId)
  {
    return this.http.put("http://localhost:8080/Day1.1/event/editfoodsubmenu/" +foodId,foodSubMenu)
  }
  deleteFoodSubMenu(foodSubMenuId)
  {
    return this.http.delete("http://localhost:8080/Day1.1/admin/deletefoodsubmenu/"+foodSubMenuId)
  }
  deleteVenueCity(venueCityId)
  {
    return this.http.delete("http://localhost:8080/Day1.1/admin/deletevenuecity/"+venueCityId)
  }
  editLocation(location,venueCityId)
  {
    return this.http.put("http://localhost:8080/Day1.1/admin/editlocation/" +venueCityId,location)
  }
  getLocationById(locationId)
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/getlocationbyid/"+locationId)
  }
  deleteLocation(locationId)
  {
    return this.http.delete("http://localhost:8080/Day1.1/admin/deletelocation/"+locationId)
  }
  getFoodTypeById(foodId) 
  {
    return this.http.get("http://localhost:8080/Day1.1/admin/getfoodtypebyid/" +foodId);
  }
  editFoodType(foodDetails) 
  {
    return this.http.put("http://localhost:8080/Day1.1/admin/updatefoodtype" ,foodDetails);
  }
 
}
