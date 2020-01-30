import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {

  locationDetails : any

  constructor( private adminService : AdminService,
    private route : ActivatedRoute,
    private router : Router) { }


  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let locationId = result.get("locationId")
      console.log(locationId)

      let observableResult = this.adminService.getLocationById(locationId)

      observableResult.subscribe((data)=>{
        this.locationDetails = data;
      })
    })
  }

  onUpdate()
  {
    let observableResult = this.adminService.editLocation(this.locationDetails,this.locationDetails.venueCity.venueCityId);
    observableResult.subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/list-location'])
    })
  }

}
