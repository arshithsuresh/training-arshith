import { Injectable} from '@angular/core';
import { ICanvasEvent } from "../events/canvasEvent";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class EventInspectorLogger{
  
    eventFired:Subject<string> = new Subject();
    eventFired$ = this.eventFired.asObservable();

    constructor(){
    }
}