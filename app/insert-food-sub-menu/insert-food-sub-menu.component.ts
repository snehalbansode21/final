import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-insert-food-sub-menu',
  templateUrl: './insert-food-sub-menu.component.html',
  styleUrls: ['./insert-food-sub-menu.component.css']
})
export class InsertFoodSubMenuComponent implements OnInit {

 
  constructor(private router:Router,
    private adminService:AdminService) { }

foodSubMenu = {"subMenu":"","cost":""}
ngOnInit() {
}

onInsert(entireData)
{
console.log("In OnInsert foodType method"); 
let formdetails = entireData.form.value;
console.log(formdetails.food);

this.foodSubMenu.subMenu = formdetails.subMenu;
this.foodSubMenu.cost = formdetails.cost;
console.log(this.foodSubMenu);
let observableResult =  this.adminService.insertFoodSubMenu(formdetails.food, this.foodSubMenu);
observableResult.subscribe((data)=>{
console.log(data);
this.router.navigate(['/list-food-sub-menu']);
})
}

}
