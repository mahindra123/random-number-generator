import { Component } from "react";
import './index.css'
class RandomNumberGenerator extends Component{

    state = {value: 0}

    randomNumberBtn = () =>{
        
        this.setState(prevState => ({value: Math.floor(Math.random() * 101)}))
    }


    render(){
        const {value} = this.state

        return(
            <div className="container">
                <div>
                    <h1>Random Number</h1>
                    <p>Generate a random number in the range of 0 to 100</p>
                    <button type="button" className="btn" onClick={this.randomNumberBtn}>Generate</button>
                    <h1 className="number">{value}</h1>
                </div>
            </div>
        )
    }
}

export default RandomNumberGenerator