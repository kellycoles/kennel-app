import React, { Component } from 'react'
import './home.css'

class Home extends Component {
  render() {
    return (
      <>
      <address>
        Visit Us at the Nashville North Location
        <br />500 Puppy Way
      </address>
       <picture>
       <img src={require('./home.jpg')} alt=" A Dog" className = "center"/>
     </picture>
     </>
    )
  }
}

export default Home