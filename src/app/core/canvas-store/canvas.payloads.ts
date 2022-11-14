import { IDrawableObject } from "../objects/object";
import { fabric } from "fabric";

export interface IObjectPayload{
    object: fabric.Object;
}

export interface IObjectModifiedPayload{
    object: fabric.Object;
    canvasState: string;
}