import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-insert-location',
  templateUrl: './insert-location.component.html',
  styleUrls: ['./insert-location.component.css']
})
export class InsertLocationComponent implements OnInit {
  value = {"locationName":"", "locationCost":""}
  formdata : any;
  locationImage:any;
  constructor(private router : Router,
    private adminService : AdminService) { }
  ngOnInit() {
  }
  onSelectFile(event) {
    this.locationImage = event.target.files[0];
  }

  onInsert(entireData)
  {
    let location = entireData.form.value;
    console.log(location)
    this.value.locationName =  location.locationName
    this.value.locationCost = location.locationCost
    //this.value.locationImage = location.locationImage

    let observablResult = this.adminService.insertLocation(location,this.locationImage)

    observablResult.subscribe((data)=>{
      console.log(data)
      this.formdata = data;
      this.router.navigate(['/list-location']);
    },
    (error)=>{
      console.log(error);
    })

  }

}
