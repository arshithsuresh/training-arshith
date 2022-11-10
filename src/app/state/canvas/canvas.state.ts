import { IDrawableObject } from "src/app/core/objects/object";
import { fabric } from "fabric";
export interface ICanvasState {    
    canvasStates: string[];    
}

export const initialCanvasState: ICanvasState={
    canvasStates:[]
}