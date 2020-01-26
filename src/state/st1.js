import React from "react";

export class Car extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
            adress: {
                street: 123,
                no: 321312
            },
            counter: 0
        };
    }

    changeColor = (e) => {
        console.log(e);
        console.log(e.type);
        var newColor = prompt("Name your car color");
        this.setState({color: newColor, counter: this.state.counter+1});
    };

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                    The counter is {this.state.counter}.
                </p>
                <button
                    type = "button"
                    onClick={this.changeColor}
                >Change color</button>
                <button type="button" onClick={this.props.runEngine}>Uruchom poazd</button>
            </div>
        );
    }
}

export default class Garage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterGarage: 0
        };
    }
    handleClick = () => {
        var cntVal = this.state.counterGarage + 1;
        this.setState({counterGarage: cntVal});
    }

    render() {
        return (
            <div>
                <Car runEngine={this.handleClick}/>
                <p>Urchomiono {this.state.counterGarage} razy</p>
            </div>
        )
    }
}