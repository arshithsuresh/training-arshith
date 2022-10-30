import { Component, OnInit } from '@angular/core';

import { CanvasCoreService } from 'src/app/core/canvas/canvas-core.service';
import { Circle } from 'src/app/core/objects/circle';
import { CreateShape } from '../create-shape';

@Component({
  selector: 'app-create-circle',
  templateUrl: './create-circle.component.html',
  styleUrls: ['./create-circle.component.scss']
})
export class CreateCircleComponent  implements OnInit,CreateShape {

  myShape: Circle;
  constructor(private canvasService:CanvasCoreService) {
    this.myShape= new Circle("Circle",10,10);
  }

  ngOnInit(): void {
  }

  createShape(): void {
    this.canvasService.drawObject(new Circle("Circle",10,10))
  }

}
