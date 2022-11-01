import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { CanvasCoreService } from '../core/canvas/canvas-core.service';
import {fabric} from 'fabric';
import { IDrawableObject } from '../core/objects/object';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit,AfterViewInit {

  @ViewChild("canvas") _mCanvas?: ElementRef<HTMLCanvasElement>;
  
  canvas!: fabric.Canvas;
  constructor(private canvasService:CanvasCoreService) {
    this.canvasService.shapeCreated.subscribe((object)=>{
      this.drawObject(object);
    })
  }

  ngAfterViewInit(): void {
    if(this._mCanvas!=null)
    {
      this._mCanvas.nativeElement.width  = this._mCanvas.nativeElement.offsetWidth;
      this._mCanvas.nativeElement.height = this._mCanvas.nativeElement.offsetHeight;
      this.canvas = new fabric.Canvas(this._mCanvas.nativeElement); 
    }
    else
    {
      console.log("Canvas Null!");      
    }
  }

  ngOnInit(): void {
    
  }
  

  drawObject(object:IDrawableObject){     
    
    this.canvas.add(object.object);
  }
}
