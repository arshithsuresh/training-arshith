import { Type } from '@angular/compiler';
import { Injectable} from '@angular/core';
import { ICanvasEvent } from '../events/canvasEvent';
import { ObjectCreatedEvent } from '../events/objectCreatedEvent';
import { ObjectMovedEvent } from '../events/objectMovedEvent';
import { ObjectRotatedEvent } from '../events/objectRotatedEvent';
import { ObjectScaledEvent } from '../events/objectScaledEvent';
import { EventInspectorLogger } from './eventInspectorLogger';

@Injectable({
    providedIn: 'root'
  })

export class EventHandlerService
{    
    registedEvents:ICanvasEvent[]=[];
    
    constructor(private eventInspectorService:EventInspectorLogger){
        this.registerEvent(new ObjectCreatedEvent());      
        this.registerEvent(new ObjectRotatedEvent());   
        this.registerEvent(new ObjectMovedEvent());
        this.registerEvent(new ObjectScaledEvent());  
    }

    handleLogEvent(message:string){
        this.eventInspectorService.eventFired.next(message);
    }

    registerEvent(event:ICanvasEvent){
        this.registedEvents.push(event);        
    }
}