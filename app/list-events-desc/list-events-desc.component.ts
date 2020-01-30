import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-list-events-desc',
  templateUrl: './list-events-desc.component.html',
  styleUrls: ['./list-events-desc.component.css']
})
export class ListEventsDescComponent implements OnInit {

  eventDesc : any;
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    let observableResult = this.adminService.listEventDesc();
    observableResult.subscribe((data)=>{
      console.log(data)
      this.eventDesc = data;
    })
  }

}
