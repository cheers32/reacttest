import React, {useState} from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import DropdownList from "./DropdownList";
import Clock from "../Clock";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

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

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items}/>
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search/>
    }
}

const showDropdownList = () => {
    if (window.location.pathname === '/dropdown') {
        return <DropdownList/>
    }
}

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate/>
    }
}

const showComponent = (route, component) => {
    return window.location.pathname === route ? component : null
}

export default () => {
    const [selectedColor, setSelectedColor] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div>
            {/*<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>*/}
            {/*<h1>Widget App</h1>*/}
            <Clock/>
            <Header/>
            {/*{showAccordion()}*/}
            {/*{showList()}*/}
            {/*{showDropdownList()}*/}
            {/*{showTranslate()}*/}
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <DropdownList label="Select a Color" options={options} selected={selectedColor}
                              onSelectedChange={setSelectedColor}/>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
            {/*<Accordion items={items} />*/}
            {/*<Search />*/}
            {/*{showDropdown ?*/}
            {/*<DropdownList label="select a color" onSelectedChange={setSelectedColor} selected={selectedColor} options={options} />*/}
            {/*: null*/}
            {/*}*/}
            {/*<Translate />*/}
        </div>
    )
}
