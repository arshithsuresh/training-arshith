import { createReducer, on } from "@ngrx/store";
import { ObjectCreated, ObjectModified } from "./canvas.actions";
import { initialState } from "./canvas.state";

export const CanvasEventReducer = createReducer(
    initialState,
    on(ObjectModified, (state, payload)=>{
        return {...state, 
            canvasState:payload.canvasState, 
            selectedObject:payload.objectSelected
        };
    }),
    on(ObjectCreated, (state, payload)=>{
        return {...state,
            selectedObject:payload.objectSelected
        };
    })
)