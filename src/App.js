// import React, {Component} from "react";
// import "./assets/css/macbookStyle.css"
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
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state ={
//             items:[],
//             isLoaded: false,
//             categoryID: [],
//         }
//     }
//
//     componentDidMount() {
//         fetch('https://625bcc9a398f3bc782aed2bb.mockapi.io/categories')
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({
//                     categoryID: json,
//                 })
//             })
//         fetch('https://625bcc9a398f3bc782aed2bb.mockapi.io/products')
//             .then(res=> res.json())
//             .then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     items: json,
//                 })
//             })
//     }
//     clickHandler(title){
//         alert("Successfull order" + title)
//     }
//
//
//     render() {
//         const {isLoaded, items, categoryID} = this.state;
//
//         if(!isLoaded){
//             return <div>Loading...</div>;
//         }
//         return (
//             <div>
//                 <h2>CHON LOAI HANG</h2>
//                     <section>
//                         {/*{categoryID.map(ele =>{*/}
//                         {/*    return(*/}
//                         {/*        <button onClick={() => {this.setState({categoryID: ele.idCate})}}>{ele.cateName}</button>*/}
//                         {/*    )*/}
//                         {/*})}*/}
//                         <button onClick={() => {this.setState({categoryID: 1})}}>macbook</button>
//                         <button onClick={() => {this.setState({categoryID: 3})}}>ipad</button>
//                         <button onClick={() => {this.setState({categoryID: 2})}}>iphone</button>
//                     </section>
//                 <div className="wrapper">
//                     {items.filter(item => item.categoryID === categoryID)
//                         .map(item =>{
//                                 return(
//                                     <div className="macbook__cart" key = {item.id}>
//                                         <img src={item.image} alt=""/>
//                                         <h3>{item.title}</h3>
//
//                                         <p className="price">{item.price}</p>
//                                         <p className="discountPrice">{item.discountPrice}</p>
//                                         <p className="offer">{item.offer}</p>
//                                         <button onClick={() => this.clickHandler(item.title)}>Buy now</button>
//                                     </div>
//                                 )
//                             }
//                         )
//                     }
//                 </div>
//             </div>
//
//         );
//     }
// }
// export default App;

// export default StepTracker;
// import React, {Component} from "react";
//
// class NameForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
//
// export default NameForm;

//
import React, {useState} from "react";


const ControlledInputs = () => {
    // const [firstName, setFirstName] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState('');

    const [person, setPerson] = useState({firstName: '', email: '', age: ''});
    const [people, setPeople] = useState([]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if(firstName && email && age) {
    //         const person = { id: new Date().getTime().toString(),
    //         firstName, email, age};
    //         console.log(person);
    //         setPeople((people) => {
    //             return [...people,person];
    //         });
    //         setFirstName('');
    //         setEmail('');
    //         setAge('')
    //     }
    //     else{
    //         console.log('empty values');
    //     }
    // };
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person,[name]:value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(person.firstName && person.email && person.age && person.movie){
            const newPerson = {...person, id: new Date().getTime()
                    .toString()}
            setPeople(([...people, newPerson]))
            setPerson({firstName: '', email: '', age: '', movie: ''})
        }
    };
    return (
        <article>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Name : </label>
                    <input type="text" id='firstName' name='firstName' value={person.firstName}
                           onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="text" id='email' name='email' value={person.email}
                           onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="age">Age : </label>
                    <input type="text" id='age' name='age' value={person.age}
                           onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="movie">Movie:</label>
                    <select name="movie" id="movie" value={person.movie} onChange={handleChange}>
                        <option value="doctorStrange">Doctor Strange</option>
                        <option value="doctorDzinhYen">Doctor Dzinh Yen</option>
                        <option value="doctorThanhVu">Doctor Thanh Vu</option>
                    </select>
                </div>
                <button type='submit'>add person</button>
            </form>
            {people.map((person, index) => {
                const {id, firstName, email, age, movie} = person;
                return (
                    <div className='item' key={id}>
                        <h4>{firstName}</h4>
                        <p>{email}</p>
                        <p>{age}</p>
                        <p>{movie}</p>
                    </div>
                )
            })}
        </article>

    )
}

export default ControlledInputs;

//
// import React, {Component} from 'react';
//
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: 'Initial data...'
//         }
//         this.updateState = this.updateState.bind(this);
//     };
//     updateState(e){
//         this.setState({data: e.target.value})
//     }
//     render() {
//         return (
//             <div>
//                 <Content myDataProp = {this.state.data}
//                 updateStateProp = {this.updateState}/>
//             </div>
//         );
//     }
// }
//
// class Content extends Component {
//     render() {
//         return (
//             <div>
//                 <input type="text" value = {this.props.myDataProp}
//                 onChange={this.props.updateStateProp}/>
//                 <h3>{this.props.myDataProp}</h3>
//             </div>
//         );
//     }
// }
//
// export default App;