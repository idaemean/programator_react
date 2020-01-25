import React from 'react';

class Car extends React.Component {
    render(){
        return <h2>I am a {this.props.brand}!</h2>;
    }
}

export default class Garage extends React.Component {
    render() {
        const carname="Mustang";
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand={carname}/>
            </div>
        );
    }
}