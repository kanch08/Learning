import React , { Component } from 'react';


class NextButton extends Component{
    render(){
        const {decreaseFormNo,increaseFormNo,formNumber} = this.props;
        return(
            <footer>
                { formNumber === 1 ?
                    <button className="back">Cancel</button>
                    :
                    <button className="back" onClick={decreaseFormNo }>Back</button>
                }

                {formNumber === 3 ?
                    <button className="next" type="submit"> Save & Continue -> </button>
                    :
                    <button className="next" onClick={increaseFormNo}>Next -></button>
                }

            </footer>
        )
    }
}

export default NextButton;