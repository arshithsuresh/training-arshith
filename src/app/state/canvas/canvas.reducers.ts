import { CanvasActions, CANVAS_ACTION_TYPE } from './canvas.actions';
import { ICanvasState, initialCanvasState } from './canvas.state';
import { fabric } from 'fabric';

export function CanvasEventReducer(state: ICanvasState = initialCanvasState, action: CanvasActions): ICanvasState {
    
    // let logs:string[] = state.canvasEventLog;
    // let objects = state.canvasObjects;
    let newState: ICanvasState = state;

    switch (action.type) {
        case CANVAS_ACTION_TYPE.AddObject:
            console.log('Object Added');
            // logs = state.canvasEventLog.concat(action.payload.event.getEventMessage());
            // objects = state.canvasObjects.concat(action.payload.object);
            break;

        case CANVAS_ACTION_TYPE.RemoveObject:
            console.log('Object Removed');
            // logs = state.canvasEventLog.concat(action.payload.event.getEventMessage());
            // objects = state.canvasObjects.filter((val) => val != action.payload.object);
            break;
            
        case CANVAS_ACTION_TYPE.ObjectUpdated:
            console.log('Object Modified');
            break;

        default:
            return state;
    }
    // state.canvasStates.concat(JSON.stringify(new fabric.Canvas('canvas')))
    newState = {        
        canvasStates: state.canvasStates.concat(action.payload.canvasState),
        stateLogs: state.stateLogs.concat(action.payload.stateLog)
        // canvasEventLog: logs,
    };
    return newState;
}
