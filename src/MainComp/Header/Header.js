import React, { Component, MainComp } from 'react'; 
import "./Header.css"; 
import headerimage from "../../img/headerimage.jpeg"; 


const click =(e)=> {
  e.preventDefault();
  console.log(e);
}

export class Header extends Component {

    render() {
        console.log (this.props);
        
        return (

          <>
            {/* Navigation button */}
            <header> 
                <h1>e-Trade</h1>

                <nav className = "navBar">
                    <input type = "search" className = "search" placeholder = "search for anything"/>
                    <button type = "button" className = "login" onClick = {click} > Log in </button>
                    <button type = "button" className = "cart" onClick = {click} > Cart </button>
                </nav>


            </header>

            <div className="headercontainer">
              <img className="headerimage" src = {headerimage} alt="headerimage"/>
            </div>
          </>

        ); 
    }
}

export default Header; 
