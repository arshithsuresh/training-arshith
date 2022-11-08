import { IDrawableObject } from "src/app/core/objects/object";
import { CanvasActions, CANVAS_ACTION_TYPE } from "./canvas.actions";

export interface ICanvasState
{
    canvasObjects: Array<IDrawableObject>;
    canvasStates: [];   
    canvasEventLog: string[]; 
}

export function CanvasEventReducer(
    state: ICanvasState,
    action: CanvasActions):ICanvasState
{

    switch(action.type)
    {
        case CANVAS_ACTION_TYPE.AddObject:
                state.canvasObjects.push(action.payload.object)
            return state;
        break;            
        default:
            return state;
    }
}
