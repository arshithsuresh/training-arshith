import { Component, OnInit } from '@angular/core';
import { CanvasCoreService } from 'src/app/core/canvas/canvas-core.service';
import { Rectangle } from 'src/app/core/objects/rectangle';
import { CreateShape } from '../create-shape';


@Component({
  selector: 'app-create-rect',
  templateUrl: './create-rect.component.html',
  styleUrls: ['./create-rect.component.scss']
})
export class CreateRectComponent extends CreateShape implements OnInit {
    
  constructor(protected canvasService: CanvasCoreService) {
    super();    
  }

  ngOnInit(): void {    
  }

  create():void{
    this.createShape.emit(new Rectangle("Rect",10,10,10));
  }

}
