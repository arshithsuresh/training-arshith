import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CanvasCoreService } from '../core/canvas/canvas-core.service';
import { IProperties } from './properties';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  hasObjectSelected:boolean = false;
  objectSelectedSubscription: Subscription;

  properties!:IProperties;

  constructor(private canvasService : CanvasCoreService) {
    this.objectSelectedSubscription = canvasService.objectSelected$.subscribe((object)=>{
      if(object)
      {
        this.hasObjectSelected = true;
        this.properties = canvasService.getObjectProperties(object);
      }
      else
      {
        this.hasObjectSelected = false;
      }
    })  
  }

  ngOnInit(): void {
  }

  onPropertiesChanged(properties:IProperties){
   this.canvasService.propertiesChanged.next(properties);
  }

}
