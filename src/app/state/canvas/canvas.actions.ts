import { Action } from '@ngrx/store';
import { ICanvasActionPayload } from './payload';

export enum CANVAS_ACTION_TYPE {
    AddObject = '[Canvas] Add Object',
    RemoveObject = '[Canvas] Remove Object',
    ObjectUpdated = '[Canvas] Modified Object'
}

export class AddedObject implements Action {
    readonly type: string = CANVAS_ACTION_TYPE.AddObject;
    constructor(public payload: ICanvasActionPayload) {}
}

export class ObjectUpdated implements Action {
    readonly type: string = CANVAS_ACTION_TYPE.ObjectUpdated;
    constructor(public payload: ICanvasActionPayload) {}
}

export class RemoveObject implements Action {
    readonly type: string = CANVAS_ACTION_TYPE.RemoveObject;
    constructor(public payload: ICanvasActionPayload) {}
}

export type CanvasActions = AddedObject | RemoveObject | ObjectUpdated;
