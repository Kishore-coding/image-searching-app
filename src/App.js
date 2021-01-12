import React, { Component } from 'react'
import ImageList from './components/ImageList';
import ImageSearch from "./components/ImageSearch";

const API_KEY="19242763-b55c3b522d57ec4d497f0f0eb";

export default class App extends Component {

  state={
    images:[],
    error:null, 
    message:null  
    }

  fetchData=async(e)=>{     
    e.preventDefault()  
    let searchTerm=e.target.searchValue.value;
    console.log(searchTerm)
    const url=`https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
    const  request=await  fetch(url);
    const response=await request.json()
    console.log(response)


    if(request){
      this.setState({
        message:"hello",
        error:null
      })

    }
    if(searchTerm){
      this.setState({
        images:response.hits,
        error:null
      }) 
    }
    else{
      this.setState({
        error:"Please enter a value to Search",
      })
    }

}

  
    /*console.log(searchTerm)
    console.log(this.state.images) */         
  
  /*componentDidMount(){
    this.fetchData();
  }*/
  render() {
      
    return (
      <div>
        
          <ImageSearch fetchData={this.fetchData}/>
          
         {
           this.state.error !==null ? <div className="errorMsg">
                  {this.state.error}
                  
            </div>:
            <ImageList images={this.state.images}/>
          }
           
         {
           this.state.message===null ? 
           <section className="default-images ">
            <img className="img" src="https://source.unsplash.com/random/200x200" alt="1"/>
            <img className="img" src="https://source.unsplash.com/random/201x200" alt="2"/>
            <img className="img" src="https://source.unsplash.com/random/202x200" alt="3"/>
            <img className="img" src="https://source.unsplash.com/random/203x200" alt="4"/>
            <img className="img" src="https://source.unsplash.com/random/204x200" alt="5"/>
            <img className="img" src="https://source.unsplash.com/random/205x200" alt="6"/>
            <img className="img" src="https://source.unsplash.com/random/206x200" alt="7"/>
            <img className="img" src="https://source.unsplash.com/random/207x200" alt="8"/>
            <img className="img" src="https://source.unsplash.com/random/208x200" alt="9"/>

            
        </section>:
           <div></div>
         }
      </div>
    )
  }
}
//In this project I created an image searcher app using PIXZBAY API , so here we can search for the images that we need (example: beach,chicken,apple, dog etc)