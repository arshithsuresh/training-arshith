import { fabric } from "fabric";
import { Vector2 } from "../properties/location";
import { IDrawableObject, ITwoPointObject } from "./object";

export class Line implements IDrawableObject, ITwoPointObject
{
    constructor(
        public object:fabric.Object,
        public name:string,
        public length:number,        
        public origin:Vector2,
        public end:Vector2)
    {}
}