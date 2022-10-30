import { fabric } from "fabric";
import { Vector2 } from "../properties/location";
import { IDrawableObject, ILockedScalable } from "./object";

export class Square implements IDrawableObject, ILockedScalable
{
    constructor(
        public object:fabric.Rect,
        public name:string,
        public length:number,
        public width:number,
        public origin:Vector2
        )
    {}
}