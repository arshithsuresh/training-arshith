import { ICanvasEvent } from "./canvasEvent";

export class ObjectRotatedEvent implements ICanvasEvent
{
    active: boolean=true;
    eventName: string = "object:rotating";
    eventMessage:string = "Object Rotated";
    
    constructor(){
    }

    enableEvent(): void {
        this.active=true;
    }

    disableEvent(): void {
        this.active=false;
    }

    getEventName():string{
        return this.eventName;
    }

    getEventMessage(eventData:fabric.IEvent):string{
        if(eventData.target!=undefined && eventData.target.type!=undefined) 
        {
            this.eventMessage = `[ Object Rotated ] : ${eventData.target.type} rotated to ${eventData.target.angle} degree`;
        }
        return this.eventMessage;
    }
}