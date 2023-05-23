import React from 'react';
import './Exercise.css';

export class Exercise extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            operationSign: '+',
            result: 0,
            button1Value: 12,
            button2Value: 12,
            button3Value: 12,

        }
        this.checkButton1Value = this.checkButton1Value.bind(this);
        this.checkButton2Value = this.checkButton2Value.bind(this);
        this.checkButton3Value = this.checkButton3Value.bind(this);
        this.checkResult = this.checkResult.bind(this);
    }
    componentDidMount(){
        this.getResult();
    }
    getResult(){
        let firstNumber, secondNumber, result;
        if(this.props.arithmeticType === 0) console.log('In if all');
        else if(this.props.arithmeticType === 1){
            firstNumber = Math.floor(Math.random()*100 + 1);
            secondNumber = Math.floor(Math.random()*100 + 1);
            result = firstNumber + secondNumber;
            this.setState({
                firstNumber: firstNumber,
                secondNumber: secondNumber,
                result: result
            })
            console.log('In else if (this.props.arithemticType): ', this.props.arithmeticType);
        }
        this.setButtonValue(result);
    }
    setButtonValue(result){
        const resultButton = Math.floor(Math.random()*3);
        let plusResultButton = Math.floor(Math.random()*result);
        let minusResultButton = Math.floor(Math.random()*result);
        plusResultButton += result;
        //minusResultButton -= result;
        if(resultButton === 0) this.setState({
            button1Value: result,
            button2Value: plusResultButton,
            button3Value: minusResultButton
        });
        else if(resultButton === 1) this.setState({
            button1Value: minusResultButton,
            button2Value: result,
            button3Value: plusResultButton
        });
        else this.setState({
            button1Value: plusResultButton,
            button2Value: minusResultButton,
            button3Value: result
        });
    }
    checkButton1Value(){
        if(this.state.button1Value === this.state.result) this.getResult();
        else alert('Try Again!');
    }
    checkButton2Value(){
        if(this.state.button2Value === this.state.result) this.getResult();
        else alert('Try Again!');
    }
    checkButton3Value(){
        if(this.state.button3Value === this.state.result) this.getResult();
        else alert('Try Again!');
    }
    checkResult(e){
        const inputResult = e.target.value;
        const inputResultNumber = parseInt(inputResult);
        let result = this.state.result;
        console.log(inputResult+' '+ this.state.result);
        if(inputResultNumber === this.state.result){
            e.target.value = '';
            this.getResult();
        }
        else if(inputResult.length === this.state.result.toString().length && inputResultNumber !== this.state.result){
            e.target.value = '';
            alert(inputResult+' isn\'t correct! Try Again!');
        }
        console.log(inputResult.length);
    }
    render(){
        return(
            <table>
                <tbody>
                    <tr>
                        <td>{this.state.firstNumber}</td>
                        <td>{this.state.operationSign}</td>
                        <td>{this.state.secondNumber}</td>
                        <td>=</td>
                        
                    </tr>
                    <tr>
                        <td colSpan="4"><input onChange={this.checkResult}/></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}