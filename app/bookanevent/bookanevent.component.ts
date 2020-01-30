import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bookanevent',
  templateUrl: './bookanevent.component.html',
  styleUrls: ['./bookanevent.component.css']
})
export class BookaneventComponent implements OnInit {

  eventDesc : any;
  event : any;
  venuCity : any;
  location : any;
  defEventDesc:any
  defVenueCity:any;
  radioSelected:any
  constructor(private router : Router,
              private clientService : ClientService) { }

  ngOnInit() {

   
    let obResult = this.clientService.getAllEventDesc()
    obResult.subscribe((data)=>{
      console.log(data)
      this.eventDesc = data;
      this.defEventDesc = data[0].eventDescId;
      console.log("defeventDesc",this.defEventDesc);
    })

    let obResultOfvenueCity = this.clientService.getAllVenueCity()
    obResultOfvenueCity.subscribe((data)=>{
      console.log(data)
      this.venuCity = data;
      this.defVenueCity = data[0].venueCityId;
      console.log("defVenueCity",this.defVenueCity)
    })

   
  }
  onChangeVenueCity(venueCityId: number)
  {
   let obResultOfLocations = this.clientService.getLocationListByVenueCityId(venueCityId);
   obResultOfLocations.subscribe((data)=>{
    console.log(data);
    this.location = data;
    this.radioSelected = data[0].locationId;
    console.log(this.radioSelected);
   })
  }

  

}

