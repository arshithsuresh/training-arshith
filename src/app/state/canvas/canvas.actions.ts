import { Action } from '@ngrx/store';
import { IDrawableObject } from 'src/app/core/objects/object';

export enum CanvasActionType {
    AddObject = '[Canvas] Add Object',
    RemoveObject = '[Canvas] Remove Object',
    ObjectRotated = '[Canvas] Rotated Object',
    ObjectMoved = '[Canvas] Moved Object',
    ObjectScaled = '[Canvas] Scaled Object',
}

export class AddObject implements Action {
    readonly type: string = CanvasActionType.AddObject;
    constructor(public payload: IDrawableObject) {}
}

export class RemoveObject implements Action {
    readonly type: string = CanvasActionType.RemoveObject;
    constructor(public payload: IDrawableObject) {}
}

export class ObjectRotated implements Action {
    readonly type: string = CanvasActionType.ObjectRotated;
}

export class ObjectMoved implements Action {
    readonly type: string = CanvasActionType.ObjectMoved;
}

export class ObjectScaled implements Action {
    readonly type: string = CanvasActionType.ObjectScaled;
}

export type CanvasActions = AddObject | RemoveObject | ObjectMoved | ObjectRotated | ObjectScaled;
