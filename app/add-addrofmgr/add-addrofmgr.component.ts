import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-addrofmgr',
  templateUrl: './add-addrofmgr.component.html',
  styleUrls: ['./add-addrofmgr.component.css']
})
export class AddAddrofmgrComponent implements OnInit {

  constructor(private adminService:AdminService,
              private router:Router) { }

  ngOnInit() {
  }
  
  onAdd(entireData)
  {
    console.log("In onAdd() method"); 
    let addr = entireData.form.value;
    console.log(addr);
    let mgrid = localStorage.getItem('mgrId');
    console.log(mgrid);
    let observableResult =  this.adminService.addAddress(mgrid, addr );
    observableResult.subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/list-users']);
    })
  }
}
