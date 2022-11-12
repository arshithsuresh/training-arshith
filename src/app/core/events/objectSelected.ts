import { ICanvasEventHandler } from './canvasEvent';

export class ObjectSelectedEvent extends ICanvasEventHandler {
    
    eventName: string = 'selection:updated';
    eventMessage: string = 'Object Selected';

    constructor() {
        super();
    }    

    getEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Selected ] : ${eventData.target.type} selected. `;
        }
        return this.eventMessage;
    }
}
