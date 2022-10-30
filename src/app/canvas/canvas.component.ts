import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { CanvasCoreService } from '../core/canvas/canvas-core.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit,AfterViewInit {

  @ViewChild("canvas") _mCanvas?: ElementRef<HTMLCanvasElement>;  
  constructor(private canvasService:CanvasCoreService) { }

  ngAfterViewInit(): void {
    if(this._mCanvas!=null)
    {
      let canvas = this._mCanvas.nativeElement;          
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      this.canvasService.canvasLoaded.emit(this._mCanvas.nativeElement);
    }
    else
    {
      console.log("Canvas Null!");      
    }
  }

  ngOnInit(): void {
    
  }
}
