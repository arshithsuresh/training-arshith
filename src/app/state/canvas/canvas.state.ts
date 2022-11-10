import { IDrawableObject } from "src/app/core/objects/object";

export interface ICanvasState {
    canvasObjects: Array<IDrawableObject>;
    canvasStates: [];
    canvasEventLog: string[];
}

export const initialCanvasState: ICanvasState={
    canvasObjects:[],
    canvasStates:[],
    canvasEventLog:["Canvas initialized..."]
}