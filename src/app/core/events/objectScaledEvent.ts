import { ICanvasEventHandlers } from './canvasEvent';

export class ObjectScaledEvent extends ICanvasEventHandlers {
    
    eventName: string = 'object:scaled';
    eventMessage: string = 'Object Scaled';

    constructor() {
        super();
    }

    constructEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Scaled ] : ${eventData.target.type} scaled`;
        }
        
        return this.eventMessage;
    }
}
