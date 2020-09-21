// purpose is to show one image at a time

import React from "react";

// the props are automatically carry in the instance
class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans: 0}
        this.imageRef = React.createRef();  // this is a good way to link the DOM element to component
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
        console.log(this.imageRef)
        console.log(this.imageRef.current) // before the actual images, the console won't know the actual size
        //console.log(this.imageRef.current.clientHeight)
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight)
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)
        this.setState({spans})   // can use short hand without spans: spans, ES2015 syntax shorthand
    }

    render() {
        const {description, urls} = this.props.image  // same way of extracting attributes from an object
        return (  // inline style, this is special sytax for inline style because it uses :, so anything after : needs a `` and $
            //<div style={{gridRowEnd: this.state.spans}}>
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef}  // passing in instance's variable imageRef as prop "ref" to this JSX tag,
                    // so that the actual DOM element will be associated with this component
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard

// document.querySelector('img').clientHeight
// this is to reach DOM using JS, but don't use this in react, use REF system instead
// normally only changing data is put to state, so this ref is not in state but an instance variable