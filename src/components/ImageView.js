import React from 'react';
import {Link} from "react-router-dom";

function ImageView(props) {
    console.log(props);
    const {largeImageURL,tags,likes,pageURL}=props.location.state.image;
    return (
        <div className="view-image">
            <button className="back-to-home"><Link className="home-link" to="/">Back to home</Link></button>
            <div className="view-details">    
                <img src={largeImageURL} alt={tags}/>
                <p>&copy; Pixabay</p>
                <div  className="no-of-likes">Likes | <span className="likes">{" "+ likes}</span></div>
                <h4><span><a className="download" rel="noreferrer" target="_blank" href={pageURL}>GO TO DOWNLOAD</a></span></h4>
            </div>
        </div>
    ) }

export default ImageView
