import { IDrawableObject } from "../objects/object";
import { fabric } from "fabric";

export interface IObjectPayload{
    object: fabric.Object;
}

export interface ICanvasModifiedPayload{
    canvasState: string;
}