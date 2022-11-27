import { IDrawableObject } from "../objects/object";
import { fabric } from "fabric";

export interface ICanvasState{
    canvasState: string;    
    applyState?:boolean;
}