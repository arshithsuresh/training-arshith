import { ICanvasEvent } from "./canvasEvent";

export class ObjectCreatedEvent implements ICanvasEvent{

    active: boolean=true;
    eventName: string = "object:added";
    eventMessage:string = "Object Created";
    
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
            this.eventMessage = `[ Object Created ] : ${eventData.target.type} added to canvas!`;
        }
        return this.eventMessage;
    }  


}