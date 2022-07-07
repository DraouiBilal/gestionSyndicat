import { SET_ALERT, REMOVE_ALERT } from '../types';

const initialState = {
  status:false,
  type:"",
  title:""
}

function alertReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return {
          ...state,
          status:true,
          type:payload.type,
          title:payload.title
      }
    case REMOVE_ALERT:
      return{
          ...initialState
      }
    default:
      return state;
  }
}

export default alertReducer;