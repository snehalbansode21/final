import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-food-sub-menu',
  templateUrl: './edit-food-sub-menu.component.html',
  styleUrls: ['./edit-food-sub-menu.component.css']
})
export class EditFoodSubMenuComponent implements OnInit {

 
  foodSubMenuDetails : any

  constructor( private adminService : AdminService,
               private route : ActivatedRoute,
               private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      console.log(result.get("foodSubMenuId"))
      let foodSubMenuId = result.get("foodSubMenuId")
      let observebleResult = this.adminService.getFoodSubMenuById(foodSubMenuId);

      observebleResult.subscribe((data)=>{
        console.log(data)
        this.foodSubMenuDetails = data;
      })
    })

  }

  onUpdate()
  {
    let observebleResult = this.adminService.editFoodSubMenu(this.foodSubMenuDetails,this.foodSubMenuDetails.food.foodId);
    observebleResult.subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/list-food-sub-menu'])
    })
    
  }

}
