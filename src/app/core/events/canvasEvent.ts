import { fabric } from 'fabric';

export interface ICanvasEvent{

    active:boolean;
    eventName:string;
    eventMessage:string;
        
    disableEvent():void;
    enableEvent():void;
    getEventName():string;
    getEventMessage(eventData:fabric.IEvent):string;    
    
}