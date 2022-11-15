import { createAction, props } from "@ngrx/store";
import { ICanvasModifiedPayload } from "./canvas.payloads";

export enum CANVAS_ACTION_TYPE{
    CanvasStateModified="[ Canvas Action ] Canvas State Modified"
}

export const CanvasStateModified = createAction(
    CANVAS_ACTION_TYPE.CanvasStateModified,
    props<ICanvasModifiedPayload>()    
)
