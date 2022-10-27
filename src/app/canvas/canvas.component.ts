import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit,AfterViewInit {

  @ViewChild("canvas") mcanvas?: ElementRef<HTMLCanvasElement>;
  context?: CanvasRenderingContext2D | null;
  constructor() { }

  ngAfterViewInit(): void {
    if(this.mcanvas!=null)
    {
      this.context = this.mcanvas.nativeElement.getContext('2d');      
    }
    else
    {
      console.log("Canvas Null!")
    }
  }

  ngOnInit(): void {
    
  }



}
