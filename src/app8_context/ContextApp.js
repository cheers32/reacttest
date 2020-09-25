import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "./LanguageContext";

class ContextApp extends React.Component {
    state = {language: 'english'}

    onLanguageChange = language => {
        this.setState({language})
    }

    render() {
        return (
            <div className="ui container">
                context app
                <div>
                    Select a language
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag cn" onClick={() => this.onLanguageChange('chinese')}/>
                </div>
                {this.state.language}
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default ContextApp