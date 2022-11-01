import { Component, OnInit } from '@angular/core';
import { CanvasCoreService } from 'src/app/core/canvas/canvas-core.service';
import { Triangle } from 'src/app/core/objects/triangle';
import { CreateShape } from '../create-shape';

@Component({
  selector: 'app-create-triangle',
  templateUrl: './create-triangle.component.html',
  styleUrls: ['./create-triangle.component.scss']
})
export class CreateTriangleComponent extends CreateShape implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  create():void{
    this.createShape.emit(new Triangle("Tringle",10,10));
  }  
}
