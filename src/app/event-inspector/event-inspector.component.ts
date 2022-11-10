import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EventInspectorLogger } from '../core/logging/eventInspectorLogger';

@Component({
    selector: 'app-event-inspector',
    templateUrl: './event-inspector.component.html',
    styleUrls: ['./event-inspector.component.scss'],
})
export class EventInspectorComponent implements OnInit, AfterViewInit {
  
    @ViewChild('logView') eventLogViewer!: ElementRef;
    eventLogs: string[] = [];

    constructor(private eventInspectorService: EventInspectorLogger) {}

    ngOnInit(): void {
        this.eventInspectorService.eventFired$.subscribe((eventData) => {
            this.addToEventLog(eventData);
            this.scrollViewToTop();
        });
    }

    ngAfterViewInit(): void {
        //console.log('INit');
    }    

    scrollViewToTop() {
        this.eventLogViewer.nativeElement.scrollTop = this.eventLogViewer.nativeElement.scrollHeight;
    }

    addToEventLog(log: string) {
        this.eventLogs.push(log);
    }
}
