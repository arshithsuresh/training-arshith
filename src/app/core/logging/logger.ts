import { ICanvasEvent } from "../events/canvasEvent";

export interface ILogger{
    logEvent(event:ICanvasEvent):void;
}