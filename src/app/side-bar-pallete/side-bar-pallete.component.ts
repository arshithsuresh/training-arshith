import { Component, OnInit } from '@angular/core';
import { CanvasCoreService } from '../core/canvas/canvas-core.service';

@Component({
  selector: 'app-side-bar-pallete',
  templateUrl: './side-bar-pallete.component.html',
  styleUrls: ['./side-bar-pallete.component.scss']
})
export class SideBarPalleteComponent implements OnInit {

  constructor(private canvasService:CanvasCoreService) { }

  ngOnInit(): void {
    
  }

}
