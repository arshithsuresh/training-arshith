import { createAction, props } from "@ngrx/store";
import { IObjectModifiedPayload, IObjectPayload } from "./canvas.payloads";

export enum CANVAS_ACTION_TYPE{
    ObjectSelected = '[ Canvas ] Object Selected',
    ObjectModified = '[ Canvas ] Object Modified',
    ObjectCreated = '[ Canvas ] Object Created',
    ObjectRemoved = '[ Canvas ] Object Removed' 
}

export const ObjectCreated = createAction(
    CANVAS_ACTION_TYPE.ObjectCreated,
    props<IObjectPayload>()    
)

export const ObjectSelected = createAction(
    CANVAS_ACTION_TYPE.ObjectSelected,
    props<IObjectPayload>()    
)

export const ObjectModified = createAction(
    CANVAS_ACTION_TYPE.ObjectModified,
    props<IObjectModifiedPayload>()
)