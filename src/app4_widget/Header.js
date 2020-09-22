import React from "react";
import Link from "../shared/Link";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/4" className="item">Accordion</Link>
            <Link href="/4/list" className="item">Search</Link>
            <Link href="/4/dropdown" className="item">Dropdown</Link>
            <Link href="/4/translate" className="item">Translate</Link>
        </div>
    )
}

export default Header