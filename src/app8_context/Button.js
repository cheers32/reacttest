import React from "react";
import LanguageContext from "./LanguageContext";

class Button extends React.Component {
    static contextType = LanguageContext  // must be called this special name; static means a property to this class, not to object

    render() {
        const text = this.context === 'english' ? 'submit' : 'ti jiao'
        console.log(this.context)
        return <button className="ui button primary">{text}</button>
    }
}

//Button.contextType = LanguageContext   // same effect

export default Button