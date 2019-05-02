import React , { Component } from 'react';


class NextButton extends Component{
    render(){
        const {decreaseFormNo,increaseFormNo} = this.props;

        return(
            <footer>
                <button className="back" onClick={decreaseFormNo}>Back</button>
                <button className="next" onClick={increaseFormNo}>Next</button>
            </footer>
        )
    }
}

export default NextButton;