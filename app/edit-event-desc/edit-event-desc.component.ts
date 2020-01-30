import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-event-desc',
  templateUrl: './edit-event-desc.component.html',
  styleUrls: ['./edit-event-desc.component.css']
})
export class EditEventDescComponent implements OnInit {

  eventdesc:any
  constructor(private route:ActivatedRoute,
              private adminService:AdminService,
              private router:Router) { }

  ngOnInit() {
    console.log("in edit desc");
    this.route.paramMap.subscribe((result)=>{
      let eventdescno = result.get("eventDescId"); 
     console.log(eventdescno);

      let observableResult = this.adminService.getEventDescById(eventdescno);
         
      observableResult.subscribe((data)=>{
        console.log(data);
       this.eventdesc = data;
      });
    });
   }

   onEdit()
   {
     console.log(this.eventdesc.eventDescId);
     console.log(this.eventdesc.mgr.managerId);
    let observableResult = this.adminService.updateEventDesc(this.eventdesc,this.eventdesc.eventDescId,this.eventdesc.mgr.managerId);

    observableResult.subscribe((data)=>{
      console.log(data);

      this.router.navigate(['/list-events-desc']);
    })
   }

}
