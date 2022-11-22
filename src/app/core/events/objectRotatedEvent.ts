import { CanvasEvent, ICanvasEventHandler } from './canvasEvent';
import { CANVAS_EVENT_TYPE } from './eventType';

export class ObjectRotatedEvent extends ICanvasEventHandler {
    
    eventName: string = 'object:rotated';
    eventMessage: string = 'Object Rotated';
    hasHistory = true;
    loggable = true;

    constructor() {
        super();
    }

    getEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Rotated ] : 
                                ${eventData.target.type} 
                                rotated to ${eventData.target.angle} degree`;
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
