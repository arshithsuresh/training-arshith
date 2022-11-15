import { createReducer, on } from "@ngrx/store";
import { CanvasStateModified } from "./canvas.actions";
import { initialState } from "./canvas.state";

export const CanvasEventReducer = createReducer(
    initialState,
    on(CanvasStateModified, (state, payload)=>{
        return {...state, 
            canvasState:payload.canvasState,            
        };
    })
)