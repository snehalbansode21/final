import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-insert-event-desc',
  templateUrl: './insert-event-desc.component.html',
  styleUrls: ['./insert-event-desc.component.css']
})
export class InsertEventDescComponent implements OnInit {

  constructor(private router:Router,
              private adminService:AdminService) { }

  event = {"eventName":"","eventCost":""}
  ngOnInit() {
  }

  onInsert(entireData)
  {
    console.log("In OnInsert eventDesc method"); 
    let eventdesc = entireData.form.value;
    console.log(eventdesc.mgr);

    this.event.eventName = eventdesc.eventName;
    this.event.eventCost = eventdesc.eventCost;
    console.log(this.event);
    let observableResult =  this.adminService.insertEventDesc(eventdesc.mgr, this.event);
    observableResult.subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/list-events-desc']);
     })
  }
}
