import { ICanvasEventHandler } from './canvasEvent';

export class ObjectRotatedEvent extends ICanvasEventHandler {
    
    eventName: string = 'object:rotated';
    eventMessage: string = 'Object Rotated';
    hasHistory = true;

    constructor() {
        super();
    }

    getEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Rotated ] : 
                                ${eventData.target.type} 
                                rotated to ${eventData.target.angle} degree`;
        }
        return this.eventMessage;
    }
}
