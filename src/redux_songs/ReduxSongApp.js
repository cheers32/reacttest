import React from "react";
import {selectSong} from "./actions";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail"; // import named function; index.js makes only need to specify folder name

const ReduxSongApp = () => {
    selectSong()
    return <div>
        Redux song app
        <div className="ui container grid">

            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
            </div>
        </div>
        <div className="column eight wide">
            <SongDetail />
        </div>
    </div>
}

export default ReduxSongApp

// redux library = reducers + action creators + ...
// redux store = reducers + state