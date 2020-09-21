import React, {useEffect, useState} from "react";
// npm install axios
import axios from "axios"

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState('')

    useEffect( ()=> {
        const timeoutId = setTimeout(() => {
            setDebouncedText(text)
        }, 2000)
        return () => {
            clearTimeout(timeoutId)
            console.log("clean up")
        }
    }, [text])

    useEffect(()=> {
        const doTranslation = async () => {
            console.log("making google api call...")
            const res = await axios.post('https://translation.googleapis.com/language/translate/v2', {},
                {
                    params: {
                        q: text,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                },
            )
            setTranslated(res.data.data.translations[0].translatedText)
        }
        if(text)
            doTranslation()
        //console.log("new language or text")

        // const timeoutId = setTimeout(() => {
        //     if (text) {
        //         doTranslation()
        //     }
        // }, 2000)
        // return () => {
        //     clearTimeout(timeoutId)
        //     console.log("clean up")
        // }

    }, [language, debouncedText])


    return <div className="ui header">convert<hr />
        {translated}
    </div>
}

export default Convert