import React from "react";
import faker from "faker";

// use props (properties) system to configure; parent to customize child looks and behaves by passing config; child cannot pass back.
const CommentDetail = (props) => {
    console.log(props)
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>

            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            </div>
            <div className="metadata">
                <span className="date">Today at 6:00pm</span>
            </div>
            <div className="text">
                Nice blog post!
            </div>
        </div>
    );
};

export default CommentDetail;