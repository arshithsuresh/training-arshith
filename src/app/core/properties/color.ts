import { type } from "os";

class Color{    
    constructor(
        public r:number=0,
        public g:number=0,
        public b:number=0,
        public a:number=1){}

    toRGB(){
        return `rgb(${this.r},${this.g},${this.b})`;
    }

    toRGBA(){
        return `rgb(${this.r},${this.g},${this.b},${this.a})`;
    }

    static zero = new Color(0,0,0,1);
}

class test{
    color:Color = Color.zero;
}