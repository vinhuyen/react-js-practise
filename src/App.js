import React,{Component} from "react";
import "./assets/css/macbookStyle.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            items:[],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://625bcc9a398f3bc782aed2bb.mockapi.io/products')
            .then(res=> res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }

    // callAPI(){
    //     this.setState({
    //         isLoaded: true,
    //     });
    //     fetch("https://625bcc9a398f3bc782aed2bb.mockapi.io/products")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     isLoaded: false,
    //                     items: result.items
    //                 });
    //             }
    //         )
    // }

    render() {
        const {isLoaded, items} = this.state;

        if(!isLoaded){
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>MACBOOK SIU XỊN</h2>
                <div className="wrapper">
                    {/* eslint-disable-next-line array-callback-return */}
                    {items.map(item => {
                        return(
                            <div className="macbook__cart" key={item.id}>
                                <img src={item.image} alt=""/>
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <p>{item.offer}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        );
    }
}


export default App;
