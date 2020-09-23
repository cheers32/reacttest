import unsplash from "./api/unsplashConfig";
import React from "react";
import SearchBar from "./components/SearchBar";
//import Clock from "../shared/Clock";
import ImageList from "./components/ImageList";

class App3 extends React.Component {
    state = { images: []}  // map is a built-in function for array

    render() {
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                {/*<Clock />*/}
                <SearchBar onSubmit2={this.handleSearchSubmit2} />
                Found: {this.state.images.length} images!
                <ImageList images={this.state.images} />
            </div>
        );
    }

    handleSearchSubmit = (term) => {  // the option method is normally a cors request
        console.log(term)
        //axios.get('https://api.unsplash.com/search/photos', {  // async call without waiting
        unsplash.get('/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID wtrLJE2QsAi6heylKfJIGjl5Efzan8ZIdt6CuA74v3w'
            }
        }).then((response)=>{  // this is considered a hard way to use
            console.log(response.data.results)
        });  // a promise object is the result as notification of request completed, use chained function
    }

    //async handleSearchSubmit2(term) {  // this is a pretty good way; but any concern on "this" usage? the left of . is the actual this object, in this case, it's props
    handleSearchSubmit2 = async (term) => {
        console.log(term)
        //const response = await axios.get('https://api.unsplash.com/search/photos', {  // async call without waiting
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID wtrLJE2QsAi6heylKfJIGjl5Efzan8ZIdt6CuA74v3w'
            }
        })
        console.log(response.data.results)
        this.setState({images: response.data.results})
    }  // a promise object is the result as notification of request completed, use chained function

}

export default App3