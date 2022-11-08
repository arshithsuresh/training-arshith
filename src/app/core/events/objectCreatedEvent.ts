import { ICanvasEventHandlers } from './canvasEvent';

export class ObjectCreatedEvent extends ICanvasEventHandlers {
    
    eventName: string = 'object:added';
    eventMessage: string = 'Object Created';

    constructor() {
        super();
    }    

    constructEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Created ] : ${eventData.target.type} added to canvas!`;
        }
        return this.eventMessage;
    }
}
