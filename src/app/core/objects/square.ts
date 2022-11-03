import { fabric } from "fabric";
import { IDrawableObject, ILockedScalable } from "./object";

export class Square implements IDrawableObject, ILockedScalable
{
    constructor(
        public object:fabric.Rect,
        public name:string,
        public length:number,
        public width:number,
        public origin:fabric.Point= new fabric.Point(0,0)
        )
    {}
}