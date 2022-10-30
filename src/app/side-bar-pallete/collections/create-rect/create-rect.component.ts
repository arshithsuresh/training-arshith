import { Component, OnInit } from '@angular/core';
import { CanvasCoreService } from 'src/app/core/canvas/canvas-core.service';
import { Rectangle } from 'src/app/core/objects/rectangle';
import { CreateShape } from '../create-shape';


@Component({
  selector: 'app-create-rect',
  templateUrl: './create-rect.component.html',
  styleUrls: ['./create-rect.component.scss']
})
export class CreateRectComponent  implements OnInit,CreateShape {
  
  myShape: Rectangle;
  constructor(protected canvasService: CanvasCoreService) {
    this.myShape= new Rectangle("Rect",10,10,10); 
  }

  ngOnInit(): void {    
  }

  createShape(): void {    
    this.canvasService.drawObject(new Rectangle("Rect",10,10,10));
  }

}
