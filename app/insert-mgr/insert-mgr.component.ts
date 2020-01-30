import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-mgr',
  templateUrl: './insert-mgr.component.html',
  styleUrls: ['./insert-mgr.component.css']
})
export class InsertMgrComponent implements OnInit {

  constructor(private adminService:AdminService,
              private router:Router) { }

  ngOnInit() {
  }

  mgrData : any
  onInsert(entireData)
  {
    console.log("In OnInsert method"); 
    let mgr = entireData.form.value;
    console.log(mgr);
    let observableResult =  this.adminService.insertMgr(mgr);
    observableResult.subscribe((data)=>{
    console.log(data);
    this.mgrData = data;
    console.log(this.mgrData.userId)
    localStorage.setItem('mgrId',this.mgrData.userId)
    this.router.navigate(['/add-addrofmgr']);
    })
  }
}
