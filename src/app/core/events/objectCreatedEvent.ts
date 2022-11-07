import { ICanvasEvent } from './canvasEvent';

export class ObjectCreatedEvent extends ICanvasEvent {
    
    eventName: string = 'object:added';
    eventMessage: string = 'Object Created';

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
