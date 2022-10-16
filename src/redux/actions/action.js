import { SET_MUSIC } from "../type";

const set_music = (music) =>({
    type: SET_MUSIC,
    payload: music,
});

export const fetchData = () =>{
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '537bd75ae1msha6662416e110958p10756ejsn99f56cde7816',
          'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
      };
    return async (dispatch, getState) =>{
        await fetch( 'https://shazam-core.p.rapidapi.com/v1/charts/world', options )
        .then(response => response.json())
        .then(response => dispatch(set_music(response)))
        .catch(err => console.error(err));
    }
}