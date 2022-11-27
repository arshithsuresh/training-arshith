import { fabric } from 'fabric';
import { CANVAS_EVENT_TYPE } from './eventType';

export class CanvasEvent
{       
    constructor(private eventType:CANVAS_EVENT_TYPE,
        private message:string, public hasHistory=true){}

    getEventMessage(){
        return this.message;
    }

    getEventType(){
        return this.eventType;
    }
}
export abstract class ICanvasEventHandler {
    active: boolean = true;
    abstract eventName: string;
    abstract eventMessage: string;
    abstract hasHistory: boolean;
    abstract loggable:boolean;

    disableEvent(): void {
        this.active = false;
    }
    enableEvent(): void {
        this.active = true;
    }
    getEventName(): string {
        return this.eventName;
    }

    handleEvent(){
        console.log("EVENT :: " + this.eventName);
    }

    abstract getEventMessage(eventData: fabric.IEvent): string;
    abstract constructEvent(eventData: fabric.IEvent):CanvasEvent;
}

