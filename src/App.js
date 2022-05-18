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
// import React, {useState} from "react";
//
//
// const ControlledInputs = () => {
//     // const [firstName, setFirstName] = useState('');
//     // const [email, setEmail] = useState('');
//     // const [age, setAge] = useState('');
//
//     const [person, setPerson] = useState({firstName: '', email: '', age: ''});
//     const [people, setPeople] = useState([]);
//
//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     if(firstName && email && age) {
//     //         const person = { id: new Date().getTime().toString(),
//     //         firstName, email, age};
//     //         console.log(person);
//     //         setPeople((people) => {
//     //             return [...people,person];
//     //         });
//     //         setFirstName('');
//     //         setEmail('');
//     //         setAge('')
//     //     }
//     //     else{
//     //         console.log('empty values');
//     //     }
//     // };
//     const handleChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setPerson({...person,[name]:value})
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if(person.firstName && person.email && person.age && person.movie){
//             const newPerson = {...person, id: new Date().getTime()
//                     .toString()}
//             setPeople(([...people, newPerson]))
//             setPerson({firstName: '', email: '', age: '', movie: ''})
//         }
//     };
//     return (
//         <article>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="firstName">Name : </label>
//                     <input type="text" id='firstName' name='firstName' value={person.firstName}
//                            onChange={handleChange}/>
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email : </label>
//                     <input type="text" id='email' name='email' value={person.email}
//                            onChange={handleChange}/>
//                 </div>
//                 <div>
//                     <label htmlFor="age">Age : </label>
//                     <input type="text" id='age' name='age' value={person.age}
//                            onChange={handleChange}/>
//                 </div>
//                 <div>
//                     <label htmlFor="movie">Movie:</label>
//                     <select name="movie" id="movie" value={person.movie} onChange={handleChange}>
//                         <option value="doctorStrange">Doctor Strange</option>
//                         <option value="doctorDzinhYen">Doctor Dzinh Yen</option>
//                         <option value="doctorThanhVu">Doctor Thanh Vu</option>
//                     </select>
//                 </div>
//                 <button type='submit'>add person</button>
//             </form>
//             {people.map((person, index) => {
//                 const {id, firstName, email, age, movie} = person;
//                 return (
//                     <div className='item' key={id}>
//                         <h4>{firstName}</h4>
//                         <p>{email}</p>
//                         <p>{age}</p>
//                         <p>{movie}</p>
//                     </div>
//                 )
//             })}
//         </article>
//
//     )
// }
//
// export default ControlledInputs;


// import React, {Component} from 'react';
//
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: 'Vinh Uyen'
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

// import React, { Component } from "react";
// export default class Score extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             hk1: 0,
//             hk2: 0,
//             avg: 0,
//             result: "",
//             xl: "",
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//
//     }
//     handleChange = (event) => {
//         let key = event.target.name;
//         let val = event.target.value;
//
//         this.setState({ [key]: val });
//         this.setState((state) => ({
//             avg: parseFloat((parseFloat(state.hk1) + parseFloat(state.hk2)) / 2),
//         }));
//         this.setResult();
//         this.setXL();
//     };
//     handleSubmit = (event) => {
//         event.preventDefault();
//         alert("Bạn là học sinh" + this.state.xl);
//     };
//     setResult = () => {
//         if (this.state.avg > 4.5) this.setState({ result: "Được lên lớp" });
//         else this.setState({ result: "Ở lại lớp" });
//     };
//     setXL = () => {
//         if (this.state.avg < 4.5) this.setState({ xl: "yếu" });
//         else if (this.state.avg < 6.5) this.setState({ xl: "trung bình" });
//         else if (this.state.avg < 8) this.setState({ xl: "khá" });
//         else if (this.state.avg < 9) this.setState({ xl: "giỏi" });
//         else if (this.state.avg < 10) this.setState({ xl: "Xuất sắc" });
//     };
//     render() {
//         return (
//             <div className="container">
//                 <h3 className="text-center"> Kết quả học tập </h3>
//                 <form onSubmit={this.handleSubmit} className="was-validated">
//                     <div className="form-group">
//                         <label htmlFor="hk1">Điểm HK1: </label>
//                         <input type="number" className="form-control" id="hk1" name="hk1" max={10} min={0} defaultValue={0} required onChange={this.handleChange}>
//                         </input>
//                         {/* <div className="invalid-feedback">Điểm không hợp lệ </div> */}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="hk2">Điểm HK2: </label>
//                         <input type="number" className="form-control" id="hk2" name="hk2" max={10} min={0} defaultValue={0} required onChange={this.handleChange}>
//                         </input>
//                         {/* <div className="invalid-feedback">Điểm không hợp lệ </div> */}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="hk2">Điểm trung bình: </label>
//                         <input
//                             type="number" className="form-control"
//                             readOnly value={this.state.avg}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="hk2">Kết quả: </label>
//                         <input type="text" className="form-control" defaultValue={0} readOnly value={this.state.result}>
//                         </input>
//
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="hk2">Xếp loại: </label>
//                         <input type="text" className="form-control"
//                                defaultValue={0} readOnly value={this.state.xl}>
//                         </input>
//                         <button type="submit" value="Submit" className="btn btn-primary">
//                             Xem tất cả
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }


// import React, {Component} from 'react';
//
// class App extends Component {
//     render(){
//         return(
//             <FormHandler/>
//         )
//     }
// }
// class FormHandler extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             semester1Mark: 0,
//             semester2Mark: 0,
//             averageMark: 0,
//             result: "",
//             range: "",
//         }
//
//     }
//     handleChange = (e) =>{
//         const name = e.target.name;
//         const value = e.target.value;
//         this.setState({[name]: value});
//     }
//
//     handleSubmit = (e) =>{
//         e.preventDefault();
//         let semester1Mark = this.state.semester1Mark;
//         let semester2Mark = this.state.semester2Mark;
//         let average = 0;
//         if(Number(semester1Mark) || Number(semester2Mark)){
//             alert("must be number")
//         }
//         else{
//             average = (parseFloat(semester1Mark )+ parseFloat(semester2Mark)) / 2;
//             this.setState({averageMark: average});
//             if (average > 9){
//                 this.setState({result: "good student"});
//                 this.setState({range: "step"});
//                 if (average < 9 && average >= 7.5){
//                     this.setState({result: "medium student"});
//                     this.setState({range: "step"});
//                 }
//                 else if (average < 7.5 && average >= 5){
//                     this.setState({result: "low student"});
//                     this.setState({range: "step"});
//                 }
//                 else{
//                     this.setState({result: "weak student"});
//                     this.setState({range: "repeat a year"})
//                 }
//             }
//         }
//     }
//     render(){
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div>
//                     <label>
//                         <input type="number" id="semester1Mark" min="0" max="10" onChange={this.handleChange}/>
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         <input type="number" id="semester2Mark" min="0" max="10" onChange={this.handleChange}/>
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         <input type="text" id="averageMark" readOnly value={this.state.averageMark} onChange={this.handleChange}/>
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         <input type="text" id="result" value={this.state.result} onChange={this.handleChange}/>
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         <input type="text" id="range" value={this.state.range} onChange={this.handleChange}/>
//                     </label>
//                 </div>
//                 <button type="submit">submit</button>
//             </form>
//         )
//     }
// }
// export default App;

import React, {Component} from "react";

class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            nameDrink: " ",
            quantity: 0,
            price: 0,
            money_KT: 0,
            total: 0,
            ex_money: 0
        }
        this.handleChange= this.handleChange.bind(this); //tránh binding trong render là bind trong hàm tạo constructor
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleChange =  (event) =>{
        let key = event.target.name;
        let val = event.target.value;

        this.setState({[key]:val});
        this.setState = ((state) => ({
            total: (state.price * state.quantity)
        }));
        this.setState =((state) => ({
            ex_money: (state.total - state.money_KT)
        }));

    }
    handleSubmit = (event) =>{
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form className="mainMenu" name="forml">
                    <table>
                        <tr>
                            <td colSpan={2} align id="title">MENU</td>
                        </tr>
                        <tr><td colSpan={2} align="center">Cafe sữa     ............................. 12.000đ</td></tr>
                        <tr><td colSpan={2} align="center">Cafe đá      ............................. 10.000đ</td></tr>
                        <tr><td colSpan={2} align="center">String dâu   ............................. 8.000đ</td></tr>
                        <tr><td colSpan={2} align="center">Trà đá       ............................. 2.000đ</td></tr>
                        <tr>
                            <td>Tên thức uống:</td>
                            <td>
                                <select name="name_Drink" className="typeWater" >
                                    <option value="" disabled selected>Chọn nước bạn thích!</option>
                                    <option value="12000">Cà phê sữa </option>
                                    <option value="10000">Cà phê đá </option>
                                    <option value="8000">String dâu</option>
                                    <option value="2000">Trà đá </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Số lượng:</td>
                            <td><input
                                type="number"
                                id="quantity"
                                name="quantity"
                                className="form-control"
                                defaultValue={0}
                                required
                                onChange={this.handleChange}
                            />
                            </td>
                        </tr>
                        <tr>
                            <td>Tiền khách trả:</td>
                            <td><input
                                type="number"
                                id="tien_KT"
                                name="tien_KT"
                                className="form-control"
                                defaultValue={0}
                                required
                                onChange={this.handleChange}
                            />
                            </td>
                        </tr>
                        <tr>
                            <td>Tổng tiền:</td>
                            <td><input
                                type="number"
                                id="total"
                                name="total"
                                className="form-control"
                                defaultValue={0}
                                readOnly
                                value={this.state.total}
                            />
                            </td>
                        </tr>
                        <tr>
                            <td>Tiền dư:</td>
                            <td><input
                                type="number"
                                id="tien_du"
                                name="ex_money"
                                className="form-control"
                                defaultValue={0}
                                readOnly
                                value={this.state.ex_money}
                            />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}><input type="submit" id="tinh_tien" name="Submit" value="Tính tiền" /></td>
                        </tr>

                    </table>
                </form>
            </div>
        );
    }
}
export default Menu;
