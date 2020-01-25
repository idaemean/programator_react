import React from 'react';

class Car extends React.Component {
    render(){
        var brand = prompt("Please enter your car brand");
        if (brand==="Ford"){
            return <h2>I am an outstanding! {brand}!</h2>;
        } else {
            return <h2>I am a {brand}!</h2>;
        }

    }
}

export default class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car/>
            </div>
        );
    }
}