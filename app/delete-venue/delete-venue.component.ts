import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-venue',
  templateUrl: './delete-venue.component.html',
  styleUrls: ['./delete-venue.component.css']
})
export class DeleteVenueComponent implements OnInit {

  constructor( private adminService : AdminService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let venueCityId = result.get("venueCityId")
      let observableResult = this.adminService.deleteVenueCity(venueCityId)
      observableResult.subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/list-venue-city'])
      })
    })
  }
}
