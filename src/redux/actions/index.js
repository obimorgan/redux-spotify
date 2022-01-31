
export const SET_HOME = "SET_HOME";

export const setHomeAction = (query) => {
    return async (dispatch, getState) => {
       try {
           let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}&limit=6`)
           if (response.ok) {
               let data = await response.json(); 
               dispatch({ type: SET_HOME, payload: data.data });
               console.log(data.data)
               console.log("my current state is", getState())
           } else {console.log("error")}
       } catch (error) {
           console.log(error)
       }
    }
};
