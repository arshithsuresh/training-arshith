import { CanvasEvent, ICanvasEventHandler } from './canvasEvent';
import { CANVAS_EVENT_TYPE } from './eventType';

export class ObjectSelectedEvent extends ICanvasEventHandler {
    eventName: string = 'selection:updated';
    eventMessage: string = 'Object Selected';
    hasHistory = false;
    loggable = false;

    constructor() {
        super();
    }

    getEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Selected ] : ${eventData.target.type} selected. `;
        }
        return this.eventMessage;
    }

    constructEvent(eventData: fabric.IEvent) {
        let event: CanvasEvent = new CanvasEvent(CANVAS_EVENT_TYPE.OBJECT_SELECTED, this.getEventMessage(eventData), false);
        return event;
    }
}
