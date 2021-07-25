import React,{Component} from 'react';
import axios from 'axios';
import reactDom from 'react-dom';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { userList:[] }
        this.getinitilaData()
    }

    getinitilaData = async() =>{


        
        const data = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
        const getData = await data.data
        if(data.status == 200){
            
            this.setState({userList:getData})
        }
      
    }

    
    render() { 

        return ( 
                    <div>
                       {this.state.userList.map((d,i)=>(
                           <div key={i}>
                                <div>Key: {i}</div>
                                <div> ID: {d.id}</div>
                                <div>Title: {d.title}</div>                           
                           </div>
                       ))} 
                    </div>
         );
    }
}
 
export default Details;