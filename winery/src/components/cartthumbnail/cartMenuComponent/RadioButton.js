import React , { Component } from 'react';

class RadioButton extends Component{
    render(){
        const { name , colorButtonToggle , imageKeys,onRadioChange} = this.props;
        let checkmarkRadioStyle = {
            "background" : imageKeys
        }
        return(
            <div className="radio">
                <ul>
                    {
                        checkmarkRadioStyle.background.map((item) => {
                                return(
                                    <li onClick={colorButtonToggle}>
                                        <label className="container">
                                            <input
                                                type="radio"
                                                onClick={(e) => onRadioChange(e)}
                                                value={item}
                                                name={`${name} radio`}/>
                                            <span style = {{backgroundColor:item}} className="checkmark navyblue"/>
                                        </label>
                                    </li>
                                )
                            }
                        )
                    }

                </ul>
            </div>
        )
    }
}

export default RadioButton;