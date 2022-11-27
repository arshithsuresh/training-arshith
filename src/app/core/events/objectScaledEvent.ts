import { CanvasEvent, ICanvasEventHandler } from './canvasEvent';
import { CANVAS_EVENT_TYPE } from './eventType';

export class ObjectScaledEvent extends ICanvasEventHandler {
    
    eventName: string = 'object:scaled';
    eventMessage: string = 'Object Scaled';
    hasHistory = true;
    loggable = true;

    constructor() {
        super();
    }

    getEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Scaled ] : ${eventData.target.type} scaled`;
        }        
        return this.eventMessage;
    }

    constructEvent(eventData: fabric.IEvent){
        let event:CanvasEvent = new CanvasEvent(
            CANVAS_EVENT_TYPE.OBJECT_TRANSFORM_MODIFIED,
            this.getEventMessage(eventData)
        )
        return event;
    }
}
