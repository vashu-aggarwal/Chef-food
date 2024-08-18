import React from 'react'

class Userclass1 extends React.Component{

    
    constructor(props){
        super(props)
        this.state={
          userInfo:{
            name:"dummy",
            location:"default"
          }
        }
    }

    async componentDidMount(){
      const data=await fetch("https://api.github.com/users/vashu-aggarwal")
      const json=await data.json();
      console.log(json)
      this.setState({
        userInfo:json,
      }); 
      console.log("Component Did Mount")
    }
    render(){
       
        return  (
            <div>
              <h3>Name:{this.state.userInfo.login}</h3>
              <p>Loaction:{this.state.userInfo.location}</p>    
              <p>contact:@vahsugmail.com</p>
            </div>
          )
    }
}

export default Userclass1;

/* 
    Parent Constructor 
    parent Render 

    child1 constructor 
    child1 render

    child2 constructor 
    child2 render

    child1 componentDidMount 
    child2 componentDidMount
    Parent componentDidMount
 */
