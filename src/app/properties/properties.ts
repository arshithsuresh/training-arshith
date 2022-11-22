import { Color } from "fabric/fabric-impl";

export abstract class IProperties{
    strokeWidth:number=0;
    strokeColor:string="FFFFFF";
    fillColor?:string;
    angle:number=0;
}

export abstract class ICircleProperties extends IProperties
{
    radius:number = 0;
}