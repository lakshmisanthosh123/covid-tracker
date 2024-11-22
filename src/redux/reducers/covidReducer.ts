
import {
  FETCH_COVID_DATA_REQUEST,
  FETCH_COVID_DATA_SUCCESS,
  FETCH_COVID_DATA_FAILURE,
} from '../../types/covidTypes';

interface CovidState {
  covidData: { [key: string]: any };  
  loading: boolean;
  error: string | null;
}


const initialState: CovidState = {
  covidData: {},
  loading: false,
  error: null,
};


const covidReducer = (state = initialState, action: any): CovidState => {
  switch (action.type) {
    case FETCH_COVID_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_COVID_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        covidData: action.payload,
      };
    case FETCH_COVID_DATA_FAILURE:
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
