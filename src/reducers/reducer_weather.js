import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

	switch(action.type){
		case FETCH_WEATHER:
			//this updates the state array, kind of like setState, does not modify directly!
			return [ action.payload.data, ...state ];
			break;
	}
	
	return state;
}

