import React, {useState} from "react";
import DropdownList from "./DropdownList";
import Convert from "./Convert";

const options = [
    {label: "African", value: "af"},
    {label: "Arabic", value: "ar"},
    {label: "Hindi", value: "hi"},
    {label: "French", value: "fr"},
    {label: "Chinese", value: "Zh"}
]

//const apiKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Translate = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(options[4])
    const [text, setText] = useState('')

    return (
        <div className="ui form">
            <h2>Translate</h2>
            <div className="field">
                <label>Enter text</label>
                <input value={text} onChange={e=>setText(e.target.value)} />
            </div>
            <DropdownList label="Select a language" onSelectedChange={setSelectedLanguage} selected={selectedLanguage} options={options} />
            <hr />
            <h3 className="hi header">Output</h3>
            <Convert text={text} language={selectedLanguage} />

        </div>
    )
}

export default Translate