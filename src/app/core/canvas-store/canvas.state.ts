import { IDrawableObject } from "../objects/object";
import { fabric } from "fabric";

interface ICanvasState{
    objects?:[];
    selectedObject? : fabric.Object;
    canvasState: string;    
}

export const initialState:ICanvasState={
    canvasState: JSON.stringify(fabric.Canvas),
    selectedObject: undefined
}