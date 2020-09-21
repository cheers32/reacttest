import React from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";

class PostList extends React.Component {
    componentDidMount() {
         this.props.fetchPosts()
    }

    render() {
        console.log("res="+this.props.posts)
        return (
            <div>
                Post List
                <div>
                    {this.props.dummyVal}
                </div>
                <div>
                    {this.props.posts}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("my state is=" + state)
    return {
        posts: state.posts,
        dummyVal: state.dummyVal
    }
}
export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostList)
