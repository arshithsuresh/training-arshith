import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CanvasState } from "./canvas.reducers";
import { ICanvasState } from "./canvas.state";

export const getCanvasState = createFeatureSelector<ICanvasState>('canvas_state');

export const canvasStateSelector = createSelector(
    getCanvasState,
    (CanvasState : ICanvasState) =>{
        return CanvasState
    }
);