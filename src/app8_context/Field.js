import React from "react";
import LanguageContext from "./LanguageContext";

class Field extends React.Component {
    static contextType = LanguageContext  // must be called this special name; static means a property to this class, not to object

    render() {
        const text = this.context === 'english' ? 'Name' : 'ming zi'
        console.log(this.context)

        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field