import React, { Component, MainComp } from 'react'; 
import './App.css'; 
import Mainpage from "./MainComp/MainPage/Mainpage"; 
import Header from "./MainComp/Header/Header"; 
import Side from "./MainComp/Sidebar/Sidebar"; 
import PopularProduct from "./MainComp/PopularProduct/PopularProduct"; 
import Categories from "./MainComp/Categories/Categories"; 
import Footer from "./MainComp/Footer/Footer";  
import Main from './MainComp/Main';


class App extends Component {


  /* Header.js control */
  //Search Method//
  render () {
  
    return(
      <>
      {/*Header.js */}
      <Header 
        // login = {this.login}
        // cart = {this.cart}
        //img = {this.headerimage}
      />
      <Main/> 

      </>
    ); 
  }
  
}


export default App;
