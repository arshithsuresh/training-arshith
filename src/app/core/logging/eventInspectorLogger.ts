import { ILogger } from "./logger";
import { Injectable} from '@angular/core';
import { ICanvasEvent } from "../events/canvasEvent";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class EventInspectorLogger implements ILogger{
  
    eventFired:Subject<string> = new Subject();
    eventFired$ = this.eventFired.asObservable();

    constructor(){
    }

    logEvent(event:ICanvasEvent): void {
        
    }
}