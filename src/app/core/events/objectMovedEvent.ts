import { CanvasActions, ObjectUpdated } from 'src/app/state/canvas/canvas.actions';
import { CanvasEvent, ICanvasEventHandlers } from './canvasEvent';
import { CANVAS_EVENT_TYPE } from './eventType';
export class ObjectMovedEvent extends ICanvasEventHandlers {
    
    eventName: string = 'object:moved';
    eventMessage: string = 'Object Moved';

    constructor() {
        super();
    }
    
    constructEventMessage(eventData: fabric.IEvent): string {
        if (eventData.target != undefined && eventData.target.type != undefined) {
            this.eventMessage = `[ Object Moved ] : ${eventData.target.type} moved to ( ${eventData.target.getCenterPoint().x}, ${
                eventData.target.getCenterPoint().y
            } )`;
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
            // event: this.constructEvent(eventData),
            // object: eventData.target!,
            canvasState:canvasState
        });
    }
}
