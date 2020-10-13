import * as actionType from '../actions/actions';

const initialState = {
    expireTime: null,
    loggedIn: false,
  };


const reducer=(state=initialState,action)=>{
    switch(action.type){

        case actionType.AUTH_LOGIN:
            console.log("loggedIn");
            return {
              ...state,
              expireTime: action.expireTime,
            };

          case actionType.AUTHENTICATED:
            console.log(state.loggedIn);
            return {
              ...state,
              loggedIn: !state.loggedIn,
            };

          case actionType.LOGGED_OUT:
            console.log(state.loggedIn, "hello");
            return {
              ...state,
              loggedIn: !state.loggedIn,
            };
            
          default:
            return state;
    }
}

export default reducer;