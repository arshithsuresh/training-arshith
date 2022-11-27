import { CanvasEvent, ICanvasEventHandler } from './canvasEvent';
import { CANVAS_EVENT_TYPE } from './eventType';

export class ObjectMovedEvent extends ICanvasEventHandler {
    
    eventName: string = 'object:moved';
    eventMessage: string = 'Object Moved';
    hasHistory = true;
    loggable = true;

    constructor() {
        super();
    }
    
    getEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Moved ] : ${eventData.target.type} moved to ( ${eventData.target.getCenterPoint().x}, ${
                eventData.target.getCenterPoint().y
            } )`;
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
