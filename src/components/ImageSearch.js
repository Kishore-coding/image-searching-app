import React from 'react'

function ImageSearch(props) {

       
    return (
        <div className="bg-image">
            <div className="main-page">
                <div className="content">
                    <h2>Stunning free stock photos for download</h2>
                    <p>Over 2.1 million+ royalty free stock photos shared by our talented community.</p>
                </div>
            <div className="search-image">
                <form onSubmit={props.fetchData}>
                    <input id="search" type="search"  autoComplete="off" name="searchValue"
                        placeholder="Search images here..."/><i class="fas fa-search"></i>
                    
                </form>
            </div>
            </div>
            
        </div>
    )
}

export default ImageSearch
