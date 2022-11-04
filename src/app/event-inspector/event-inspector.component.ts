import { Component, OnInit } from '@angular/core';
import { EventInspectorLogger } from '../core/logging/eventInspectorLogger';

@Component({
  selector: 'app-event-inspector',
  templateUrl: './event-inspector.component.html',
  styleUrls: ['./event-inspector.component.scss']
})
export class EventInspectorComponent implements OnInit {

  eventLogs:string[]=[]

  constructor(private eventInspectorService:EventInspectorLogger) { }

  ngOnInit(): void {
    this.eventInspectorService.eventFired$.subscribe((eventData)=>{
      this.addToEventLog(eventData);
    })
  }

  addToEventLog(log:string){
    this.eventLogs.push(log);
  }

}
