
import { fabric } from "fabric";

export interface IDrawableObject{
    object:fabric.Object;
    name:string;      
    origin:fabric.Point;   
}

export interface IFreeScalable{
    width:number;
    height:number;

    freeScale(width:number, height:number):void;
}

export interface ILockedScalable{
    width:number;    
}
export interface ITwoPointObject{
    end:fabric.Point;
}
