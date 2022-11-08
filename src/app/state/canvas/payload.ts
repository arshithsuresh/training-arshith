import { ICanvasEvent } from "src/app/core/events/canvasEvent";
import { IDrawableObject } from "src/app/core/objects/object";

export interface ICanvasActionPayload{
    object: IDrawableObject,
    event: ICanvasEvent
}