import { ICanvasEventHandler } from './canvasEvent';

export class ObjectCreatedEvent extends ICanvasEventHandler {
    
    eventName: string = 'object:added';
    eventMessage: string = 'Object Created';
    hasHistory = true;

    constructor() {
        super();
    }    

    getEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Created ] : ${eventData.target.type} added to canvas!`;
        }
        return this.eventMessage;
    }
}
