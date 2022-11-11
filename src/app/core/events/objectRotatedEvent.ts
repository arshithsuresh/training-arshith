import { CanvasActions, ObjectUpdated } from 'src/app/state/canvas/canvas.actions';
import { CanvasEvent, ICanvasEventHandlers } from './canvasEvent';
import { CANVAS_EVENT_TYPE } from './eventType';

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

    constructEvent(eventData: fabric.IEvent){
        let event:CanvasEvent = new CanvasEvent(
            CANVAS_EVENT_TYPE.OBJECT_MODIFIED,
            this.constructEventMessage(eventData)
        )
        return event;
    }

    constructCanvasAction(eventData: fabric.IEvent, canvasState:string): CanvasActions {
        return new ObjectUpdated({            
            canvasState: canvasState,
            stateLog: this.constructEventMessage(eventData)
        });
    }
}
