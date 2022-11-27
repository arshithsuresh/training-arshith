import { ActionReducerMap } from "@ngrx/store";
import { CANVAS_ACTION_TYPE, ObjectModifiedActions } from "./canvas.actions";
import { ICanvasState} from "./canvas.state";
import { fabric } from "fabric";


export interface CanvasState{
    canvas_state: ICanvasState
}

export const INITIAL_CANVAS_STATE:ICanvasState = {
    canvasState: fabric.Canvas.EMPTY_JSON,
    applyState: false
}

export function CanvasEventReducer(state:ICanvasState = INITIAL_CANVAS_STATE, action: ObjectModifiedActions){
    let newState: ICanvasState = action.payload;       
    switch(action.type){
        case CANVAS_ACTION_TYPE.CanvasStateModified:
            console.log(action.type + " Fired")
        break;

        default:
            return state;    
    }
    return newState;
}

export const CanvasReducers:ActionReducerMap<CanvasState, ObjectModifiedActions> = {
   canvas_state:CanvasEventReducer
};