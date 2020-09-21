import React, {Component} from "react";
import {connect} from 'react-redux'
import {selectSong} from "../actions";

class SongList extends Component {
    renderList() {
        return this.props.songs.map(
            (s => {
                return (
                    <div className="item" key={s.title}>
                        <div className="right floated content">
                            <button
                                onClick={() => this.props.selectSong2(s)}
                                className="ui button primary">Select</button>
                        </div>
                        <div className="content">
                            {s.title}
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        console.log(this.props)
        const renderedList = this.renderList()
        return <div className="ui divided list">
            SongList
            {renderedList}
        </div>
    }
}

const mapStateToProps = (state) => {  // this is a convention, like getMyState, always take input as state
    console.log("my state is=" + state)
    console.log(state)
    //return state
    //console.log({key: state.songs.map(s => s.title)})
    //console.log({songs: state.songs})
    //return {key: state.songs.map(s => s.title)}
    return {songs: state.songs}  // this is my props, always an object
}

export default connect(mapStateToProps, {selectSong2: selectSong})(SongList)
//export default SongList

// this connect function is a react component, is a function reference