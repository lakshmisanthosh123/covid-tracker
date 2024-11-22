
import { AppDispatch } from "../store"; 
export const FETCH_COVID_DATA_REQUEST = "FETCH_COVID_DATA_REQUEST";
export const FETCH_COVID_DATA_SUCCESS = "FETCH_COVID_DATA_SUCCESS";
export const FETCH_COVID_DATA_FAILURE = "FETCH_COVID_DATA_FAILURE";


export const fetchCovidData = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_COVID_DATA_REQUEST });
    try {
 
              const response = await fetch('/covidData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        dispatch({
          type: FETCH_COVID_DATA_SUCCESS,
          payload:  await response.json(), 
        });
    } catch (error) {
     
    }
  };
};

