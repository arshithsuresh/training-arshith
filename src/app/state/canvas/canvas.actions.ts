import { Action } from '@ngrx/store';
import { IDrawableObject } from 'src/app/core/objects/object';
import { ICanvasActionPayload } from './payload';

export enum CANVAS_ACTION_TYPE {
    AddObject = '[Canvas] Add Object',
    RemoveObject = '[Canvas] Remove Object',
    ObjectRotated = '[Canvas] Rotated Object',
    ObjectMoved = '[Canvas] Moved Object',
    ObjectScaled = '[Canvas] Scaled Object',
}

export class AddObject implements Action {
    readonly type: string = CANVAS_ACTION_TYPE.AddObject;
    constructor(public payload: ICanvasActionPayload) {}
}

export class RemoveObject implements Action {
    readonly type: string = CANVAS_ACTION_TYPE.RemoveObject;
    constructor(
        public payload: ICanvasActionPayload) {}
}

export class ObjectRotated implements Action {
    readonly type: string = CANVAS_ACTION_TYPE.ObjectRotated;
    constructor(public payload: ICanvasActionPayload) {}
}

export class ObjectMoved implements Action {
    readonly type: string = CANVAS_ACTION_TYPE.ObjectMoved;
    constructor(public payload: ICanvasActionPayload) {}
}

export class ObjectScaled implements Action {
    readonly type: string = CANVAS_ACTION_TYPE.ObjectScaled;
    constructor(public payload: ICanvasActionPayload) {}
}

export type CanvasActions = AddObject | RemoveObject | ObjectMoved | ObjectRotated | ObjectScaled;
