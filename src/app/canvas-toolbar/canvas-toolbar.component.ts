import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CanvasRedoAction, CanvasUndoAction } from '../core/canvas-store/canvas.actions';
import { UndoRedoService } from '../core/undoredo/undoredo.service';

@Component({
  selector: 'app-canvas-toolbar',
  templateUrl: './canvas-toolbar.component.html',
  styleUrls: ['./canvas-toolbar.component.scss']
})
export class CanvasToolbarComponent implements OnInit {

  canUndo;
  canRedo;
  constructor(private UndoRedoHandler:UndoRedoService,
      private canvasStore:Store<CanvasState>) {
      this.canRedo = UndoRedoHandler.canRedo.getValue();
      this.canUndo = UndoRedoHandler.canUndo.getValue();

      this.initSubscriptions();
  }

  initSubscriptions(){
    this.UndoRedoHandler.canUndo$.subscribe((value=> this.canUndo = value))
    this.UndoRedoHandler.canRedo$.subscribe((value=> this.canRedo = value))
  }

  ngOnInit(): void {
  }

  onUndoClick(){
    this.canvasStore.dispatch(new CanvasUndoAction());
  }

  onRedoClick(){
    this.canvasStore.dispatch(new CanvasRedoAction());
  }

}
