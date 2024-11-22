import { AppDispatch } from "../store";

export const FETCH_STATE_COVID_DATA_REQUEST = "FETCH_STATE_COVID_DATA_REQUEST";
export const FETCH_STATE_COVID_DATA_SUCCESS = "FETCH_STATE_COVID_DATA_SUCCESS";
export const FETCH_STATE_COVID_DATA_FAILURE = "FETCH_STATE_COVID_DATA_FAILURE";

export const fetchStateCovidData = (selectedState: string) => {
  return async (dispatch: AppDispatch) => {
  
    dispatch({ type: FETCH_STATE_COVID_DATA_REQUEST });

    try {
      
      const response = await fetch('/covidData.json');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status} - ${response.statusText}`);
      }

    
      const data = await response.json();
      
      dispatch({
        type: FETCH_STATE_COVID_DATA_SUCCESS,
        payload: Object.entries(data)
        .filter(([key, value]) => key?.toLowerCase().trim() === selectedState.toLowerCase().trim())
       
      });
    } catch (error: any) {
      
    }
  };
};
