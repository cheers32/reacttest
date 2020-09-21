import React, {useEffect, useRef, useState} from "react";



const DropdownList = ({label, options, selected, onSelectedChange}) => {
    const [isOpen, setIsOpen] = useState(false)
    const refme = useRef();
    console.log("here2")

    const onBodyClick = (event) => {
        if(!refme.current.contains(event.target)) {
            console.log(event.target)
            console.log('click2')
            setIsOpen(false)
        }
    }

    useEffect(()=> {
        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])



    console.log({options})
    const renderedOptions = options.map((o) => {
        if(o.value === selected.value)
            return null

        return (
            <div key={o.value} className="item"
                 // onClick={()=>{console.log(o)}}>
                 onClick={()=>{onSelectedChange(o)}}>
            {o.label}
            </div>)
    })
    // const input =  [1,2]
    // const renderedOptions = input.map(item => {
    //         return <div>{item}</div>
    // }
    // );
    console.log(refme.current)
    console.log("here3")
    const styles = {
        color: selected.value
    }
    return (
        <div ref={refme} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                {/*<div className="ui selection dropdown visible active">*/}
                <div onClick={()=>setIsOpen(!isOpen)}
                     className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}>
                      {/*className="ui selection dropdown">*/}
                    <i className="dropdown icon"></i>
                    {/*<div className="text">Select a color right now</div>*/}
                    <div className="text">{selected.label}</div>
                    {/*<div className="menu visible transition">*/}
                    {/*<div className="menu">*/}
                    <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
                <div style={styles}>my color is {selected.label} </div>
            </div>
        </div>
    )
}

export default DropdownList