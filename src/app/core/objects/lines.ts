import { fabric } from "fabric";
import { IProperties } from "src/app/properties/properties";
import { IDrawableObject, ITwoPointObject } from "./object";

export class Line extends IDrawableObject implements ITwoPointObject
{
    properties?: IProperties;

    constructor(
        public object:fabric.Object,
        public name:string,
        public length:number,        
        public origin:fabric.Point= new fabric.Point(0,0),
        public end:fabric.Point= new fabric.Point(0,0))
    {
        super();
    }
}