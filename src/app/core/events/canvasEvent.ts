import { fabric } from 'fabric';

export abstract class ICanvasEventHandler {
    active: boolean = true;
    abstract eventName: string;
    abstract eventMessage: string;
    abstract hasHistory: boolean;

    disableEvent(): void {
        this.active = false;
    }
    enableEvent(): void {
        this.active = true;
    }
    getEventName(): string {
        return this.eventName;
    }

    handleEvent(){
        console.log("EVENT :: " + this.eventName);
    }

    abstract getEventMessage(eventData: fabric.IEvent): string;
}
