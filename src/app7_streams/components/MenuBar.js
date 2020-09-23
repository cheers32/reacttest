import React from "react";
//import {Link} from "react-router-dom";
import Link from "../../shared/Link";


const MenuBar = () => {
    return (
        <div className="ui menu">
            <Link href="/7" className="item">List</Link>
            <Link href="/7/new" className="item">Create</Link>
            <Link href="/7/edit" className="item">Edit</Link>
            <Link href="/7/delete" className="item">Delete</Link>
            <Link href="/7/show" className="item">Show</Link>
        </div>
    )
}

export default MenuBar