// Action creator
// named export, export named function, can export multiple functions from a file
export const selectSong = (song) => {
    // return an action
    return {
        type: 'SONG_SELECTED',  // a type is required
        payload: song
    }
}

//export default selectSong