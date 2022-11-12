import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { CanvasCoreService } from '../canvas/canvas-core.service';
import { ObjectSelected } from './canvas.actions';
import {catchError, map, switchMap,exhaustMap} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable()
export class CanvasEventEffects{

    constructor(
        private actions$:Actions,
        private canvasService:CanvasCoreService
    ){}    
}
