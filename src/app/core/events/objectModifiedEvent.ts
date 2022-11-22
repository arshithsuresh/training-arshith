import { CanvasEvent, ICanvasEventHandler } from './canvasEvent';
import { CANVAS_EVENT_TYPE } from './eventType';

export class ObjectModifiedEvent extends ICanvasEventHandler {
    
    eventName: string = 'object:modified';
    eventMessage: string = 'Object Modified';
    hasHistory = true;
    loggable = false;

    constructor() {
        super();
    }    

    getEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Created ] : ${eventData.target.type} added to canvas!`;
        }
        return this.eventMessage;
    }

    constructEvent(eventData: fabric.IEvent) {
        let event: CanvasEvent = new CanvasEvent(CANVAS_EVENT_TYPE.OBJECT_MODIFIED, this.getEventMessage(eventData));
        return event;
    }

    
}
