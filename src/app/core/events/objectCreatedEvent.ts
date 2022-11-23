import { CanvasEvent, ICanvasEventHandler } from './canvasEvent';
import { CANVAS_EVENT_TYPE } from './eventType';

export class ObjectCreatedEvent extends ICanvasEventHandler {
    
    eventName: string = 'object:added';
    eventMessage: string = 'Object Created';
    hasHistory = true;
    loggable = true;

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
        let event: CanvasEvent = new CanvasEvent(CANVAS_EVENT_TYPE.OBJECT_CREATED, this.getEventMessage(eventData));
        return event;
    }

    
}
