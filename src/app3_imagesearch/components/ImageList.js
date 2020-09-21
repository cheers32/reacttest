import React from "react";
import './ImageList.css'
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    const myList = [1,2,3]
    let newList = myList.map(x => x*2)
    console.log(newList)
    console.log(props)
    //return <div>ImageList</div>
    let res1 = myList.map(x=> <div>{x}*10</div>)
    //let res2 = props.images.map(image => <img key={image.id} src={image.urls.regular} alt={image.description} />);
    //let res2 = props.images.map(({description, urls, id}) => <img key={id} src={urls.regular} alt={description} />)  // this is another usage; attribute from an object can be taken out as an object as input
    //return <div>{res1}{res2}</div>
    //return <div className='image-list'>res2</div>
    const res2 = props.images.map(image => {return <ImageCard key={image.id} image={image} />});
    return <div className={"image-list"}>{res2}</div>
}

export default ImageList
