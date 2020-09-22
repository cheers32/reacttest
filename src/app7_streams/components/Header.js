import React from "react";
import {Link} from "react-router-dom";
import GoogleAuth from "../client/GoogleAuth";

// OAuth for server: when user's not logged in, OAuth for JS Browser app: while user's logged in

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/7" className="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to="/7" className="item">
                    All Streams
                </Link>
                <GoogleAuth />
            </div>

        </div>
    )
}

export default Header