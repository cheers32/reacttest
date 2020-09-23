import React, { useState, useEffect } from "react";
import axios from "axios"


const Search = () => {
    const [term, setTerm] = useState("computer")
    //let term2 = 5
    //const [term3, setTerm3] = useState("")
    const [results, setResults] = useState([])
    console.log(results)
    //console.log("rendering...")

    useEffect(() => {   // cannot use await and async directly inside useEffect
        console.log("Term was changed")
        const searchApi = async () => {   // helper function, recommended
            console.log("Searching")
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {  // take data from response
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            //setResults(data['query']['search'])
            setResults(data.query.search)
        }

        if(term && !results.length)
            searchApi()
        else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    // cancel previous timer and set new timer for 500ms, timer handler to setTerm
                    searchApi()
                }
            }, 2000)
            return () => {
                clearTimeout(timeoutId)
                console.log("clean up")
            }
        }

        // (async () => {
        //     await axios.get('sdfasfd')
        // })();  // define and invoke immediately
        //axios.get("sfasdf").then(response => {console.log(response.data)}) // use promise  // easiest but less frequently used
        //console.log("here")

    //}, [term])  // could be nothing (every render) or empty array (first time), with value means a render with this field changing
    }, [results.length, term])  // ESLint added results.length as a dependency
    // if multiple, any variable change would execution
    // this deps can only be state variable to be effective

    const renderedResults = results.map(r => {  // don't forget about the "key" property on the top level as rendered result
        // this is string templating
        return <div key={r.pageid} className="item">
            <div className="left floated content">
                <a className="ui button" href={`https://en.wikipedia.org?curid=${r.pageid}`}>Go</a>
                <div className="header">
                    {r.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: r.snippet}} />
                {/*can do find and replace for inner xml*/}
                {/*XSS attack*/}
                {/*{r.snippet}*/}
            </div>
        </div>
    })

    //console.log("nice")

    const handleChange = ({target}) => {
        console.log(target.value)
        setTerm(target.value)
        // if(target.value==="abc") {
        //     setTerm3(10)
        //     //term2 = 10
        // }
    }

    return (
        <div>
            <div className="ui form">
                <label>Search Term</label>
                <input type="text" value={term}
                    onChange={handleChange}/>
                    {/*// this is another way of implementing*/}
                    {/*//onChange={event => {setTerm(event.target.value)}}/>*/}
                    {/*//onChange={({target}) => {setTerm(target.value)}}/>*/}
                term = {term}
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search