import { ICanvasEventHandler } from './canvasEvent';

export class ObjectMovedEvent extends ICanvasEventHandler {
    
    eventName: string = 'object:moved';
    eventMessage: string = 'Object Moved';

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
}
