import React from "react";
import Link from "./Link";

const MenuBar = () => {
    return (
        <div className="ui menu">
            <Link href="/" className="item">Menu</Link>
            <Link href="/1" className="item">PostDisplay</Link>
            <Link href="/2" className="item">GeoWeather</Link>
            <Link href="/3" className="item">Image Search</Link>
            <Link href="/4" className="item">Widgets</Link>
            <Link href="/5" className="item">Redux Song</Link>
            <Link href="/6" className="item">Redux Blog</Link>
        </div>
    )
}

export default MenuBar