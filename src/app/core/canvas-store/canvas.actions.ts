import { createAction, props, Action } from "@ngrx/store";
import { ICanvasModifiedPayload } from "./canvas.payloads";

export enum CANVAS_ACTION_TYPE{
    CanvasStateModified="[ Canvas Action ] Canvas State Modified",
    CanvasUndoAction="[ Canvas Action ] Canvas Undo Action",
    CanvasRedoAction="[ Canvas Action ] Canvas Redo Action"
}

export class CanvasStateModifiedAction implements Action{
    readonly type: string = CANVAS_ACTION_TYPE.CanvasStateModified;
    constructor(public payload:ICanvasModifiedPayload){}    
}

export class CanvasUndoAction implements Action{
    readonly type: string = CANVAS_ACTION_TYPE.CanvasUndoAction;
    constructor(public payload?:ICanvasModifiedPayload){}    
}

export class CanvasRedoAction implements Action{
    readonly type: string = CANVAS_ACTION_TYPE.CanvasRedoAction;
    constructor(public payload?:ICanvasModifiedPayload){}    
}

export type NoPayloadActions = CanvasUndoAction | CanvasRedoAction;
export type ObjectModifiedActions = CanvasStateModifiedAction;

export type CanvasActions = CanvasStateModifiedAction |
                            CanvasUndoAction |
                            CanvasRedoAction;

