import { IDrawableObject } from "../objects/object";
import { fabric } from "fabric";

interface ICanvasState{
    selectedObject? : IDrawableObject;
    canvasState: string;    
}

export const initialState:ICanvasState={
    canvasState: JSON.stringify(fabric.Canvas),
    selectedObject: undefined
}