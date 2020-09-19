import React, { useState } from "react";
import Counter from "./Counter";  // this gives access to state inside a functional component

const Accordion = ({items}) => {  // equivalent to taking props, and take out items  // this must be capitalized A
    const [activeIndex, setActiveIndex] = useState(null);  // this is a build in (primitive) hook function, can make more of custom ones like this
    // In React, components need to be capitalized, and custom hooks need to start with use.
    // not a problem is not using useState
    // this definition is called array destructuring
    const colors = ['red', 'green']
    const [firstValue, secondValue] = colors // remember, this is not creating an array, but just a syntax of assignment
    // need to call useState multiple times for multiple states
    // important: when setter is called, the entire component is re-ran, except for useState initial value not used
    console.log(firstValue)
    console.log(secondValue)

    const onTitleClick = (index) => {
        console.log('Title clicked here', index)
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {  // index is an implicit input
        //return <div key={item.title}>
        // use fragement instead of top level div
        // this multi-line lambda requires "return"
        // event handler must be a method, cannot just do console.log
        // use arrow function so that it becomes event handler, otherwise will be called when component rendered
        const isActive = index===activeIndex ? 'active' : ''
        // 3 different ways to add new class style
        return <React.Fragment key={item.title}>
                {/*<div className="title active"*/}
                <div className={"title " + isActive}
                     //onClick={()=>console.log('Title Clicked:', index)}>
                     onClick={()=>onTitleClick(index)}>
                    <i className="dropdown icon"/>
                    {item.title}
                </div>
                {/*<div className="content active">*/}
                {/*<div className={"content " + isActive}>*/}
                <div className={`content ${isActive}`}>
                    <p>{item.content}</p>
                </div>
        </React.Fragment>
    })  // return JSX for every item
    return (
        <div>
            Accordion
            <Counter />
            <div className="ui styled accordion">
                {items.length}
                {renderedItems}
                <h1>{activeIndex}</h1>
            </div>
        </div>
    )
}

export default Accordion