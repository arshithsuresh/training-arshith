import { CanvasEvent } from "src/app/core/events/canvasEvent";
import { IDrawableObject } from "src/app/core/objects/object";
import { fabric } from "fabric";

export interface ICanvasActionPayload{
    // object: fabric.Object,
    // event: CanvasEvent,
    canvasState: string;
}