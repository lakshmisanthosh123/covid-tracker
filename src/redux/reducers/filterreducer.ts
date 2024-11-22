
import {
    FETCH_STATE_COVID_DATA_REQUEST,
    FETCH_STATE_COVID_DATA_SUCCESS,
    FETCH_STATE_COVID_DATA_FAILURE,
  } from '../../types/covidTypes';
  
  interface CovidState {
    statecovidData: [],  // Define the data structure you're expecting, this could be more specific
    loading: boolean;
    error: string | null;
  }
  
  
  const initialState: CovidState = {
    statecovidData: [],
    loading: false,
    error: null,
  };
  

  const covidReducer = (state = initialState, action: any): CovidState => {
    switch (action.type) {
    
        case FETCH_STATE_COVID_DATA_REQUEST:
          return { ...state, loading: true, error: null };
        case FETCH_STATE_COVID_DATA_SUCCESS:
          return {
            ...state,
            loading: false,
            statecovidData: action.payload,
          };
        case FETCH_STATE_COVID_DATA_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default covidReducer;
  