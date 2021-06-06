import React, { Component, MainComp } from 'react'; 
import "./Mainpage.css"; 


const click =(e)=> {
    e.preventDefault();
    console.log(e);
}

export class Mainpage extends Component {
    
    render() {
        console.log(this.props.product);

        const shuffledArray = this.props.product.sort((a, b) => 0.5 - Math.random());
        const prod = shuffledArray.slice(0, 6).map((product, key) => {
            return (
                    <li key={product.id} className="p-li">
                        <img className="p-image" src={product.image[0]} alt=""/>
                        <p className="p-category">{product.category}</p>
                        <p className= "p-name">{product.name}</p>
                        <p className ="p-price">{product.price}</p>
                    </li>
            )
        });

        console.log(this.props.newItems);

        const newshuffledArray = this.props.newItems.sort((a, b) => 0.5 - Math.random());
        const newitemList = newshuffledArray.slice(0, 6).map((newItems, key) => {
            return (
                    <li key={newItems.id} className="n-li">
                        <img className="n-image" src={newItems.image[0]} alt=""/>
                        <p className="n-category">{newItems.category}</p>
                        <p className= "n-name">{newItems.name}</p>
                        <p className ="n-price">{newItems.price}</p>
                    </li>
            )
        });
            return (
                <>
                   {/* Navigation button */}
                   <div className="category-container">
                       <h2 className="category">Categories</h2>

                        <ul className = "c-ul">
                            <li className = "c-li">
                                <button className="green" onClick={click}>ELECTRONIC</button>
                            </li>
                        <li className = "c-li">
                            <button className= "blue" onClick={click}>CLOTHING</button>
                        </li>
                        <li className = "c-li">
                            <button className="green" onClick={click}>BOOKS</button>
                        </li>
                        <li className = "c-li">
                            <button className= "blue" onClick={click}>HOME</button>
                        </li>
                        <li className = "c-li">
                            <button className= "green" onClick={click}>GROCERY</button>
                        </li>
                        <li className = "c-li">
                            <button className= "blue" onClick={click}>SPORTS</button>
                            </li>
                      </ul>
                    </div>
                
                    <div className="allPopular">
                        <h2 className="popular">Popular</h2>  
                        <div className="listcontainer">
                            <ul className="p-ul">
                                {prod}
                            </ul>
                        </div>
                    </div>

                    <div className="allNewItems">
                        <h2 className="newItems">New Items</h2>  
                        <div className="newItemcontainer">
                            <ul className="n-ul">
                                {newitemList}
                            </ul>
                        </div>
                    </div>

                </>
            )
    }
}

export default Mainpage; 

