import { IDrawableObject } from "../objects/object";
import { fabric } from "fabric";

interface ICanvasState{
    canvasState: string;    
}

export const initialState:ICanvasState={
    canvasState: JSON.stringify(fabric.Canvas)
}