import React from "react";

function First(props){
    return (
        <div >
            <div >
                <img src={props.link} alt="" width="200px"/>
                <p>{props.title}</p>
                <p>Price:</p>
            </div>
        </div>
    )
}

export default First;