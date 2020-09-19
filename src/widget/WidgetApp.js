import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

const items = [
    {title: "what is react?", content: "this is answer1"},
    {title: "request another?", content: "this is answer2"},
    {title: "try another?", content: "this is answer3"}
]

export default () => {
    return (
        <div>
            <h1>Widget App</h1>
            <Accordion items={items} />
            <Search />
        </div>
    )
}
