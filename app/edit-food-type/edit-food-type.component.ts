import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-food-type',
  templateUrl: './edit-food-type.component.html',
  styleUrls: ['./edit-food-type.component.css']
})
export class EditFoodTypeComponent implements OnInit {

  foodDetails : any

  constructor( private adminService : AdminService,
               private route : ActivatedRoute,
               private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      console.log(result.get("foodId"))
      let foodId = result.get("foodId")
      let observebleResult = this.adminService.getFoodTypeById(foodId);

      observebleResult.subscribe((data)=>{
        console.log(data)
        this.foodDetails = data;
      })
    })

  }

  onUpdate()
  {
    let observebleResult = this.adminService.editFoodType(this.foodDetails);
    observebleResult.subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/list-food-type']);
    })
    
  }
}
