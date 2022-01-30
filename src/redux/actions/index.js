
export const SET_HOME = "SET_HOME";

export const setHomeAction = (query) => {
    return async (dispatch, getState) => {
       try {
           let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
           if (response.ok) {
               let data = await response.json(); 
               dispatch({ type: SET_HOME, payload: data.data });
               console.log(data.data)
           } else {console.log("error")}
       } catch (error) {
           console.log(error)
       }
    }
};
