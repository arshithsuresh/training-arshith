import { Store } from '@ngrx/store';
import { AddedObject, CanvasActions } from 'src/app/state/canvas/canvas.actions';
import { CanvasEvent, ICanvasEventHandlers } from './canvasEvent';
import { CANVAS_EVENT_TYPE } from './eventType';

export class MouseDownEvent extends ICanvasEventHandlers {
    eventName: string = 'mouse:down';
    eventMessage: string = 'Mouse Down';
    eventType:CANVAS_EVENT_TYPE = CANVAS_EVENT_TYPE.OBJECT_CREATED;

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
        let event: CanvasEvent = new CanvasEvent(CANVAS_EVENT_TYPE.OBJECT_DESELECTED, this.constructEventMessage(eventData));
        if(eventData.target)
        {
            event = new CanvasEvent(CANVAS_EVENT_TYPE.OBJECT_SELECTED, this.constructEventMessage(eventData));
        }        
        return event;
    }

    constructCanvasAction(eventData: fabric.IEvent, canvasState:string): CanvasActions {
        return new AddedObject({            
            canvasState: canvasState,
            stateLog: this.constructEventMessage(eventData)
        });
    }
}