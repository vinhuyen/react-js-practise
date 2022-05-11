import React, {Component} from "react";
import "./assets/css/macbookStyle.css"
// import React, { useState } from 'react';

// function StepTracker() {
//     const [steps, setSteps] = useState(0);
//
//     function changeColor(){
//         setSteps()
//     }
//
//     function increment() {
//         setSteps(prevState => prevState + 1);
//     }
//
//     return (
//         <div>
//             Today you've taken {steps} steps!
//             <br />
//             <button onClick={increment}>
//                 I took another step
//             </button>
//         </div>
//     );
// }
//khai báo giá trị bên trong đối tượng cần lọc

// function App() {
//     const [count, setCount] = useState(3);
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }
class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            items:[],
            isLoaded: false,
            categoryID: [],
        }
    }

    componentDidMount() {
        fetch('https://625bcc9a398f3bc782aed2bb.mockapi.io/categories')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    categoryID: json,
                })
            })
        fetch('https://625bcc9a398f3bc782aed2bb.mockapi.io/products')
            .then(res=> res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }
    clickHandler(title){
        alert("Successfull order" + title)
    }

    discountCalculate(price, discountPrice){
        return (price / discountPrice).toFixed(2) * 100
    }
    render() {
        const {isLoaded, items, categoryID} = this.state;

        if(!isLoaded){
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>CHON LOAI HANG</h2>
                    <section>
                        {/*{categoryID.map(ele =>{*/}
                        {/*    return(*/}
                        {/*        <button onClick={() => {this.setState({...this.state,{ele.cateID}: 1})}}>{ele.cateName}</button>*/}
                        {/*    )*/}
                        {/*})}*/}
                        <button onClick={() => {this.setState({categoryID: 1})}}>macbook</button>
                        <button onClick={() => {this.setState({categoryID: 3})}}>ipad</button>
                        <button onClick={() => {this.setState({categoryID: 2})}}>iphone</button>
                    </section>
                <div className="wrapper">
                    {items.filter(item => item.categoryID == categoryID)
                        .map(item =>{
                                return(
                                    <div className="macbook__cart" key = {item.id}>
                                        <img src={item.image} alt=""/>
                                        <span>{() => this.discountCalculate(item.price,item.discountPrice)}</span>
                                        <h3>{item.title}</h3>
                                        <p className="price">{item.price}</p>
                                        <p className="discountPrice">{item.discountPrice}</p>
                                        <p className="offer">{item.offer}</p>
                                        <button onClick={() => this.clickHandler(item.title)}>Buy now</button>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>

        );
    }
}
export default App;

// export default StepTracker;

