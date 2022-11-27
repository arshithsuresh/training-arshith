import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UndoRedoService {
    historyCapacity = 5;
    canvasState: Array<string> = [];

    undoIndex: number = 0;
    undoLimit: number = -1;
    redoIndex: number = 0;
    redoLimit: number = -1;

    canRedo = new BehaviorSubject<boolean>(false);
    canUndo = new BehaviorSubject<boolean>(false);

    canRedo$ = this.canRedo.asObservable();
    canUndo$ = this.canUndo.asObservable();

    constructor() {}

    debug() {
        console.log('Undo Limit :: ' + this.undoLimit);
        console.log('Undo Index :: ' + this.undoIndex);
        console.log('Redo Index :: ' + this.redoIndex);
        console.log('Redo Limit :: ' + this.redoLimit);
        console.log('Canvas Mem :: ', this.canvasState);
    }
    disableUndo() {
        this.undoLimit = -1;
        this.canUndo.next(false);
    }
    enableUndo(index: number) {
        this.undoLimit = index;
        this.canUndo.next(true);
    }

    disableRedo() {
        this.redoLimit = -1;
        this.canRedo.next(false);
    }
    enableRedo(index: number) {
        this.redoLimit = index;
        this.canRedo.next(true);
    }

    initializeUndoRedoState(state: string) {
        this.canvasState[0] = state;
    }

    pushToUndoState(state: string) {
        this.undoIndex = (this.undoIndex + 1) % this.historyCapacity;
        this.canvasState[this.undoIndex] = state;

        if (this.undoLimit == this.undoIndex) {
            this.undoLimit = (this.undoIndex + 1) % this.historyCapacity;
        }

        if (this.undoLimit == -1) {
            this.enableUndo(0);
        }
        this.disableRedo();        
    }

    getUndoState(): string | undefined {
        if (this.redoLimit == -1) {
            this.enableRedo(this.undoIndex);
        }

        this.undoIndex = Math.abs((this.undoIndex + this.historyCapacity - 1) % this.historyCapacity);
        let state = this.canvasState[this.undoIndex];
        this.redoIndex = this.undoIndex;

        if (this.undoIndex == this.undoLimit) {
            console.log('Undo Limit Reached!');
            this.disableUndo();
        }
        return state;
    }

    getRedoState(): string | undefined {
        if (this.redoIndex == -1) return undefined;
        if (this.undoLimit == -1) {
            this.enableUndo(this.redoIndex);
        }

        this.redoIndex = (this.redoIndex + 1) % this.historyCapacity;
        let state = this.canvasState[this.redoIndex];
        this.undoIndex = this.redoIndex;

        if (this.redoIndex == this.redoLimit) {
            this.disableRedo();
        }
        return state;
    }
}
