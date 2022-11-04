import { ICanvasEvent } from "./canvasEvent";

export class ObjectMovedEvent implements ICanvasEvent{

    active: boolean=true;
    eventName: string = "object:moving";
    eventMessage:string = "Object Moved";
    
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
            this.eventMessage = `[ Object Moved ] : ${eventData.target.type} moved to ( ${eventData.target.getCenterPoint().x}, ${eventData.target.getCenterPoint().y} )`;
        }
        return this.eventMessage;
    }  


}