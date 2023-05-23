import React from 'react';
import './Settings.css';

export class Settings extends React.Component{
    constructor(props){
        super(props);
        this.setAll = this.setAll.bind(this);
        this.setAdd = this.setAdd.bind(this);
        this.setSub = this.setSub.bind(this);
        this.setMulti = this.setMulti.bind(this);
        this.setDiv = this.setDiv.bind(this);
        this.setPow = this.setPow.bind(this);
        this.setRoot = this.setRoot.bind(this);
    }
    setAll(){
        this.props.arithmeticType(0);
    }
    setAdd(){
        this.props.arithmeticType(1);
    }
    setSub(){
        this.props.arithmeticType(2);
    }
    setMulti(){
        this.props.arithmeticType(3);
    }
    setDiv(){
        this.props.arithmeticType(4);
    }
    setPow(){
        this.props.arithmeticType(5);
    }
    setRoot(){
        this.props.arithmeticType(6);
    }
    render(){
        return(
            <div>
                <h5>Type</h5>
                <div>
                    <input type='radio' name="arithmetic" onClick={this.setAll}/>All
                    <input type='radio' name="arithmetic" onClick={this.setAdd} defaultChecked/>Addition
                    <input type='radio' name="arithmetic" onClick={this.setSub}/>Subtraction
                    <input type='radio' name="arithmetic" onClick={this.setMulti}/>Multiplication
                    <input type='radio' name="arithmetic" onClick={this.setDiv}/>Division
                    <input type='radio' name="arithmetic" onClick={this.setPow}/>Power
                    <input type='radio' name="arithmetic" onClick={this.setRoot}/>Root
                </div>

            </div>
        );
    }
}