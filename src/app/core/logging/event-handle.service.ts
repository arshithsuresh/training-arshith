import { Type } from '@angular/compiler';
import { Injectable} from '@angular/core';
import { CanvasEvent, ICanvasEventHandlers } from '../events/canvasEvent';
import { MouseDownEvent } from '../events/mouseDownEvent';
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
    registedEvents:ICanvasEventHandlers[]=[];
    
    constructor(private eventInspectorService:EventInspectorLogger){
        this.registerEvent(new ObjectCreatedEvent());      
        this.registerEvent(new ObjectRotatedEvent());   
        this.registerEvent(new ObjectMovedEvent());
        this.registerEvent(new ObjectScaledEvent());
        this.registerEvent(new MouseDownEvent());  
    }

    handleLogEvent(message:CanvasEvent){
        this.eventInspectorService.eventFired.next(message.getEventMessage());
    }

    registerEvent(event:ICanvasEventHandlers){
        this.registedEvents.push(event);        
    }
}