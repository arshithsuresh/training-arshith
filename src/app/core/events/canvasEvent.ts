import { fabric } from 'fabric';

export abstract class ICanvasEvent {
    active: boolean = true;
    abstract eventName: string;
    abstract eventMessage: string;

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