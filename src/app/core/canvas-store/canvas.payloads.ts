import { IDrawableObject } from "../objects/object";

export interface IObjectPayload{
    objectSelected: IDrawableObject;
}

export interface IObjectModifiedPayload{
    objectSelected: IDrawableObject;
    canvasState: string;

}