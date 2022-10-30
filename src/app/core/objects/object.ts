
import { fabric } from "fabric";
import { Vector2 } from "../properties/location";

export interface IDrawableObject{
    object:fabric.Object;
    name:string;      
    origin:Vector2;   
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
    end:Vector2;
}
