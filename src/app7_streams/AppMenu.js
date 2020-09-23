import React from "react";
import {Link} from "react-router-dom";
//import Link from "../shared/Link";

// looks like this needs to put into browser router tag to work, the original my version doesn't need, but will make sign in button not able to re-render after switching
const AppMenu = () => {
    return (
        <div className="ui menu">
            {/*<Link href="/7" className="item">List</Link>*/}
            {/*<Link href="/7/new" className="item">Create</Link>*/}
            {/*<Link href="/7/edit" className="item">Edit</Link>*/}
            {/*<Link href="/7/delete" className="item">Delete</Link>*/}
            {/*<Link href="/7/show" className="item">Show</Link>*/}
            <Link to="/7" className="item">List</Link>
            <Link to="/7/new" className="item">Create</Link>
            <Link to="/7/edit" className="item">Edit</Link>
            <Link to="/7/delete" className="item">Delete</Link>
            <Link to="/7/show" className="item">Show</Link>
        </div>
    )
}

export default AppMenu