import { ICanvasEvent } from './canvasEvent';

export class ObjectRotatedEvent extends ICanvasEvent {
    
    eventName: string = 'object:rotated';
    eventMessage: string = 'Object Rotated';

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
