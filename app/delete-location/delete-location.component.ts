import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-location',
  templateUrl: './delete-location.component.html',
  styleUrls: ['./delete-location.component.css']
})
export class DeleteLocationComponent implements OnInit {

  constructor( private adminService : AdminService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let locationId = result.get("locationId")
      let observableResult = this.adminService.deleteLocation(locationId)
      observableResult.subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/list-location'])
      })
    })
  }

}
