import { ICanvasEventHandlers } from './canvasEvent';

export class ObjectRotatedEvent extends ICanvasEventHandlers {
    
    eventName: string = 'object:rotated';
    eventMessage: string = 'Object Rotated';

    constructor() {
        super();
    }

    constructEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Rotated ] : 
                                ${eventData.target.type} 
                                rotated to ${eventData.target.angle} degree`;
        }
        return this.eventMessage;
    }
}
