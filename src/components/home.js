import React from 'react';
import axios from 'axios'



class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            image:[]
        }
        this.onSearchsubmit=this.onSearchsubmit.bind(this)
    }
    
      async onSearchsubmit(entry){
      const birds =await axios.get(`https://pixabay.com/api/?key=25448605-34d1c17bccf25e1920074f6d8&q=${entry}&image_type=photo&pretty=true`)
    console.log(birds.data.hits)
    this.setState({image:birds.data.hits})
        }

render(){

    return (
      
<div className='ui container'>

<div className='ui header'>
                     search engine
                 </div>

          <div className='ui field'>
           <div className='ui icon input' style={{marginTop:'20px'}}>
               <input className='promt' text='text' placeholder='search here...'
               ></input>
            <button onClick={this.onSearchsubmit}>
             <i className='search icon'></i>
             </button>

               </div> 
               </div>

               <div>
             <p>your current collection is {this.state.image.length} this is</p>
             </div>

        </div>
        
        


    )
}
}

export default Home;