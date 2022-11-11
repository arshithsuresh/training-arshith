import { fabric } from 'fabric';
import { CanvasActions } from 'src/app/state/canvas/canvas.actions';
import { CANVAS_EVENT_TYPE } from './eventType';

export class CanvasEvent
{   
    constructor(private eventType:CANVAS_EVENT_TYPE,
        private message:string){}

    getEventMessage(){
        return this.message;
    }

    getEventType(){
        return this.eventType;
    }
}
export abstract class ICanvasEventHandlers {
    active: boolean = true;
    abstract eventName: string;
    abstract eventMessage: string;

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

    abstract constructEventMessage(eventData: fabric.IEvent): string;
    abstract constructEvent(eventData: fabric.IEvent):CanvasEvent;
    abstract constructCanvasAction(eventData: fabric.IEvent, canvasState:string): CanvasActions;
}

