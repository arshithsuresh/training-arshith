import { fabric } from "fabric";
import { IDrawableObject, ILockedScalable } from "./object";

export class Triangle implements IDrawableObject, ILockedScalable
{
    public object:fabric.Triangle
    constructor(        
        public name:string,
        public height:number,
        public width:number,
        public origin:fabric.Point= new fabric.Point(0,0)
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