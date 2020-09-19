import React, {useState} from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import DropdownList from "./DropdownList";
import Clock from "../Clock";
import Translate from "./Translate";

const items = [
    {title: "what is react?", content: "this is answer1"},
    {title: "request another?", content: "this is answer2"},
    {title: "try another?", content: "this is answer3"}
]

const options = [
    {label: "Red Color", value: "red"},
    {label: "Green Color", value: "green"},
    {label: "Blue Shade", value: "blue"},
]



export default () => {
    const [selectedColor, setSelectedColor] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            <h1>Widget App</h1>
            <Clock />
            {/*<Accordion items={items} />*/}
            {/*<Search />*/}
            {showDropdown ?
            <DropdownList label="select a color" onSelectedChange={setSelectedColor} selected={selectedColor} options={options} />
            : null
            }
            <Translate />
        </div>
    )
}
