import { Component, OnInit, ViewChild,ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CanvasCoreService } from '../core/canvas/canvas-core.service';
import {fabric} from 'fabric';
import { IDrawableObject } from '../core/objects/object';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit,AfterViewInit, OnDestroy {

  @ViewChild("canvas") _mCanvas?: ElementRef<HTMLCanvasElement>;
  
  canvas!: fabric.Canvas;

  private shapeCreatedSubscription!:Subscription;
  constructor(private canvasService:CanvasCoreService) {

    this.shapeCreatedSubscription = this.canvasService.shapeCreated.subscribe((object)=>{
      this.drawObject(object);
    })
    
  }

  ngAfterViewInit(): void {    
    if(this._mCanvas!=null)
    {
      this._mCanvas.nativeElement.width  = this._mCanvas.nativeElement.offsetWidth;
      this._mCanvas.nativeElement.height = this._mCanvas.nativeElement.offsetHeight; 
      this.canvas = new fabric.Canvas('canvas');     
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

  ngOnDestroy(): void {
    this.shapeCreatedSubscription.unsubscribe();
  }
}
