import { ICanvasEvent } from './canvasEvent';

export class ObjectScaledEvent extends ICanvasEvent {
    
    eventName: string = 'object:scaled';
    eventMessage: string = 'Object Scaled';

    constructor() {
        super();
    }

    getEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Scaled ] : ${eventData.target.type} scaled`;
        }
        
        return this.eventMessage;
    }
}
