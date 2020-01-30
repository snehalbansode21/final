import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-food-sub-menu',
  templateUrl: './delete-food-sub-menu.component.html',
  styleUrls: ['./delete-food-sub-menu.component.css']
})
export class DeleteFoodSubMenuComponent implements OnInit {

  constructor( private adminService : AdminService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let foodSubMenuId = result.get("foodSubMenuId")
      let observableResult = this.adminService.deleteFoodSubMenu(foodSubMenuId)
      observableResult.subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/list-food-sub-menu'])
      })
    })
  }

}
