import { CANVAS_EVENT_TYPE } from './eventType';
import { CanvasEvent, ICanvasEventHandler } from './canvasEvent';

export class MouseDownEvent extends ICanvasEventHandler {
    eventName: string = 'mouse:down';
    eventMessage: string = 'Mouse Down';
    eventType: CANVAS_EVENT_TYPE = CANVAS_EVENT_TYPE.MOUSE_EVENT;
    hasHistory = false;
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
        let event: CanvasEvent = new CanvasEvent(CANVAS_EVENT_TYPE.OBJECT_DESELECTED, this.getEventMessage(eventData), false);
        if (eventData.target) {
            event = new CanvasEvent(CANVAS_EVENT_TYPE.OBJECT_SELECTED, this.getEventMessage(eventData));
        }
        return event;
    }
}
