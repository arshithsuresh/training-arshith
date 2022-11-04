import { Type } from '@angular/compiler';
import { Injectable} from '@angular/core';
import { ICanvasEvent } from '../events/canvasEvent';
import { ObjectCreatedEvent } from '../events/objectCreatedEvent';
import { ObjectMovedEvent } from '../events/objectMovedEvent';
import { ObjectRotatedEvent } from '../events/objectRotatedEvent';
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
    }

    initEventHandlers(canvas:fabric.Canvas){
        this.registedEvents.forEach(event=>{
            canvas.on(event.getEventName()
            ,(e)=>{
                if(event.active)
                {
                    let eventMessage = event.getEventMessage(e);
                    this.eventInspectorService.eventFired.next(eventMessage);
                }                
            })
        })
    }

    registerEvent(event:ICanvasEvent){
        this.registedEvents.push(event);        
    }
}