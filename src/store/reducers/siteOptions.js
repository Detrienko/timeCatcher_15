import * as actionTypes from '../actions/actionsTypes';

const initialState = {
	sideBarMenuIsShown: true
}


const reducer = (state=initialState, action) => {

	switch(action.type){
		case actionTypes.TOGGLE_SIDEBAR_MENU:
			{
				let newState = {...state}
				newState.sideBarMenuIsShown = action.isShown
				return newState;
			}
		case actionTypes.DEFAULT_SIDEBAR_MENU_STATE:
			{
				let newState = {...state}
				newState.sideBarMenuIsShown = false;
				return newState;
			}


		default:
			return state; 
	}

}

export default reducer;