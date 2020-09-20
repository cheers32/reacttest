import React from "react";
import {connect} from "react-redux";

const SongDetail = (props) => {
    console.log("my props:")
    console.log(props)
    console.log(props.selectedSong)
    const renderedResult = props.selectedSong ? props.selectedSong.title + ": duration=" + props.selectedSong.duration : "Select a song to view detail"
    return <div>
        <div>
            <h3>Details for: </h3>
            {renderedResult}
        </div>
    </div>

}

const mapStateToProps = (state) => {  // this is a convention, like getMyState, always take input as state
    console.log(state)
    //return state
    //console.log({key: state.songs.map(s => s.title)})
    //console.log({songs: state.songs})
    //return {key: state.songs.map(s => s.title)}
    //return {selectedSong: state.selectedSong}  // this is my props, always an object
    return {selectedSong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)