import React from 'react'
import "../index.css"
import {Link} from "react-router-dom";
 
function ImageList({images}) {
    return (
        !images? <div>iam fine</div>:
        
        <div className="pop">
            
                <div className="image-container">
                    {images.map(image=>{
                return (
                    <div key={image.id} className="details">
                        <div className="image-list">
                           <Link to={{pathname:`/image/${image.id}`,
                                    state:{image:image}
                            }}>
                            
                                <img src={image.largeImageURL} alt={image.tags} />
                           </Link> 
                        </div>
                                        
                        <div className="view-button">
                          <Link to={{pathname:`/image/${image.id}`,
                                state:{image:image}                       
                          }}>
                            <button className="view">View</button>
                            </Link>  
                        </div>
                    </div>
                    
                )
            })}
        </div> 
            
        </div>
    )
}

export default ImageList
