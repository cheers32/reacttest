import './SeasonDisplay.css'
import React from "react";

// const myFunc = () => {  // all functions are defined like this
// }

const seasonConfig = {
    summer: {
        text: 'very warm',
        iconName: 'sun'
    },   // value is an object; keys matching below values
    winter: {
        text: 'very cold',
        iconName: 'snowflake'
    }
}

const SeasonDisplay = (props) => {

    const month = new Date().getMonth()  // can be const, but use let for variables
    const lat = props.lat
    let season = ""
    if(month>7 && lat>0)
        season = "winter";
    else
        season = "summer";
    const config = seasonConfig[season]
    const {text, iconName} = seasonConfig[season]  // new usage syntax
    //const icon = season === 'winter' ? 'snowflake' : 'sun'
    //let text = season === 'winter' ? "very cold" : "warm"  // user === for equals, what is ==?
    return (  // this ` is ES2015 template string   // root element class name equal to component name
        <div className={`season-display ${season}`}>{text},{season}, {month}, {props.lat}
            <i className={`icon-left big ${iconName} icon`} />
            <div>{config["text"]}</div>
            <div>{config["iconName"]}</div>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>

      //   <i className={`${icon} icon`} />   //this is called string template, special syntax
      // </div>

    );
}

export default SeasonDisplay