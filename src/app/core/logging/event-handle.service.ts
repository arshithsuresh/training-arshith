import { Type } from '@angular/compiler';
import { Injectable} from '@angular/core';
import { ICanvasEventHandler } from '../events/canvasEvent';
import { ObjectCreatedEvent } from '../events/objectCreatedEvent';
import { ObjectMovedEvent } from '../events/objectMovedEvent';
import { ObjectRotatedEvent } from '../events/objectRotatedEvent';
import { ObjectScaledEvent } from '../events/objectScaledEvent';
import { ObjectSelectedEvent } from '../events/objectSelected';
import { EventInspectorLogger } from './eventInspectorLogger';

@Injectable({
    providedIn: 'root'
  })

export class EventHandlerService
{    
    registedEvents:ICanvasEventHandler[]=[];
    
    constructor(private eventInspectorService:EventInspectorLogger){
        this.registerEvent(new ObjectCreatedEvent());      
        this.registerEvent(new ObjectRotatedEvent());   
        this.registerEvent(new ObjectMovedEvent());
        this.registerEvent(new ObjectScaledEvent());  
        this.registerEvent(new ObjectSelectedEvent());
    }

    handleLogEvent(message:string){
        this.eventInspectorService.eventFired.next(message);
    }

    registerEvent(event:ICanvasEventHandler){
        this.registedEvents.push(event);        
    }
}