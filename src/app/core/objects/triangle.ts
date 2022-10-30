import { fabric } from "fabric";
import { Vector2 } from "../properties/location";
import { IDrawableObject, ILockedScalable } from "./object";

export class Triangle implements IDrawableObject, ILockedScalable
{
    public object:fabric.Triangle
    constructor(        
        public name:string,
        public height:number,
        public width:number,
        public origin:Vector2=Vector2.zero
        )
    {
        this.object = new fabric.Triangle(
            {
                name:name,
                width:width, height:height,                             
                left:origin.x, top:origin.y,
                originX:"left", originY:"top",
                fill:"transparent", stroke:"solid",
                strokeWidth:1                
            }
        )
    }
}