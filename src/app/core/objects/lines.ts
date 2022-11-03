import { fabric } from "fabric";
import { IDrawableObject, ITwoPointObject } from "./object";

export class Line implements IDrawableObject, ITwoPointObject
{
    constructor(
        public object:fabric.Object,
        public name:string,
        public length:number,        
        public origin:fabric.Point= new fabric.Point(0,0),
        public end:fabric.Point= new fabric.Point(0,0))
    {}
}