import { IDrawableObject } from "src/app/core/objects/object";
import { fabric } from "fabric";
export interface ICanvasState {    
    canvasStates: string[];
    stateLogs:string[];    
}

export const initialCanvasState: ICanvasState={
    canvasStates:[],
    stateLogs:[]
}