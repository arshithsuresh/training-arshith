import { CanvasActions, CANVAS_ACTION_TYPE } from './canvas.actions';
import { ICanvasState, initialCanvasState } from './canvas.state';
import { fabric } from 'fabric';

export function CanvasEventReducer(state: ICanvasState = initialCanvasState, action: CanvasActions): ICanvasState {
 
    let newState: ICanvasState = state;

    switch (action.type) {
        case CANVAS_ACTION_TYPE.AddObject:
            console.log('Object Added');
            break;

        case CANVAS_ACTION_TYPE.RemoveObject:
            console.log('Object Removed');
            break;
            
        case CANVAS_ACTION_TYPE.ObjectUpdated:
            console.log('Object Modified');
            break;

        default:
            return state;
    }    
    newState = {        
        canvasStates: action.payload.canvasState,
        stateLogs: action.payload.stateLog        
    };
    return newState;
}
