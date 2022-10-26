import { SET_MUSIC } from "../type";
import { SET_POPULAR } from "../type";
import { SET_PLAYLIST } from "../type";

const set_music = (music) =>({
  type: SET_MUSIC,
  payload: music,
});

const set_popular = (popular) =>({
  type: SET_POPULAR,
  payload: popular,
});

const set_playlist = (playlist) =>({
  type: SET_PLAYLIST,
  payload: playlist,
});

export const fetchData = () =>{
    const options = {
        method: 'GET',
      };
    return async (dispatch, getState) =>{
        await fetch( 'https://musica-api.up.railway.app/new', options )
        .then(response => response.json())
        .then(response => dispatch(set_music(response)))
        .catch(err => console.error(err));
    }
}

export const fetchPopular = () =>{
  const options = {
      method: 'GET',
    };
  return async (dispatch, getState) =>{
      await fetch( 'https://musica-api.up.railway.app/popular', options )
      .then(response => response.json())
      .then(response => dispatch(set_popular(response)))
      .catch(err => console.error(err));
  }
}

export const fetchPlaylist = () =>{
  const options = {
      method: 'GET',
    };
  return async (dispatch, getState) =>{
      await fetch( 'https://musica-api.up.railway.app/playlist', options )
      .then(response => response.json())
      .then(response => dispatch(set_playlist(response)))
      .catch(err => console.error(err));
  }
}