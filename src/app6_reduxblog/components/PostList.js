import React from "react";
import {connect} from "react-redux";
import {fetchPostAndUsers, fetchPosts} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
    componentDidMount() {
        console.log("fetching data...")
        //this.props.fetchPosts()
        this.props.fetchPostAndUsers()
    }

    renderList() {
        const res = this.props.posts.map(post => {
            return(
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <div><UserHeader userId={post.userId} /></div>
                    </div>
                </div>
            )
        })
        return res
    }

    render() {
        //console.log("res="+this.props.posts)
        return (
            <div>
                Post List
                {this.props.dummyVal}
                <div className="ui relaxed divided list">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log("my state is")
    //console.log(state)
    return {
        posts: state.posts,
        dummyVal: state.dummyVal
    }
}
export default connect(mapStateToProps, {fetchPosts: fetchPosts, fetchPostAndUsers})(PostList)
