import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-insert-food-type',
  templateUrl: './insert-food-type.component.html',
  styleUrls: ['./insert-food-type.component.css']
})
export class InsertFoodTypeComponent implements OnInit {

  constructor(private router:Router,
    private adminService:AdminService) { }

food = {"foodType":"","category":""}
ngOnInit() {
}

onInsert(entireData)
{
console.log("In OnInsert foodType method"); 
let foodtype = entireData.form.value;
console.log(foodtype.event);

this.food.foodType = foodtype.foodType;
this.food.category = foodtype.category;
console.log(this.food);
let observableResult =  this.adminService.insertFoodType(foodtype.event, this.food);
observableResult.subscribe((data)=>{
console.log(data);
this.router.navigate(['/list-food-type']);
})
}

}
