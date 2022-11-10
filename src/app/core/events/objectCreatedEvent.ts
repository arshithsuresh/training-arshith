import { Store } from '@ngrx/store';
import { AddedObject, CanvasActions } from 'src/app/state/canvas/canvas.actions';
import { CanvasEvent, ICanvasEventHandlers } from './canvasEvent';
import { CANVAS_EVENT_TYPE } from './eventType';

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

    constructEvent(eventData: fabric.IEvent) {
        let event: CanvasEvent = new CanvasEvent(CANVAS_EVENT_TYPE.OBJECT_CREATED, this.constructEventMessage(eventData));
        return event;
    }

    constructCanvasAction(eventData: fabric.IEvent, canvasState:string): CanvasActions {
        return new AddedObject({
            // event: this.constructEvent(eventData),
            // object: eventData.target!,
            canvasState: canvasState,
            stateLog: this.constructEventMessage(eventData)
        });
    }
}
