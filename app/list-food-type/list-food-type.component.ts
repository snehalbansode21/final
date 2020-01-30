import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-list-food-type',
  templateUrl: './list-food-type.component.html',
  styleUrls: ['./list-food-type.component.css']
})
export class ListFoodTypeComponent implements OnInit {

  foodType : any;
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    let observableResult = this.adminService.listFoodTypes();
    observableResult.subscribe((data)=>{
      console.log(data)
      this.foodType = data;
    })
  }

}
