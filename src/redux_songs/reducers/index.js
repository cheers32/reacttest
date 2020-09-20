import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        {title: 'song name 1', duration: '4:05'},
        {title: 'song name 2', duration: '2:30'},
        {title: 'song name 3', duration: '3:21'},
        {title: 'i want it that way', duration: '1:45'}
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type==='SONG_SELECTED') {
        return action.payload
    }
    else {
        return selectedSong
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})