import React,{Component} from 'react';
import Car from './assets/Car.png';
import righttick from './assets/righttick.png';

export default class ProgressBar extends Component {
    render() {
        let {formNumber}=this.props;
        return(
            <div>
                <div className="customer">
                    <h1>New Customer</h1>
                </div>
                <div className="ProgressBarStyle">

                    {formNumber===1?
                        <div className="defaultBar">
                            <div className="child car">
                                <img src={Car} alt={"pointer"}/>
                            </div>
                            <div className="child milestone2">2
                            </div>
                            <div className="child milestone3">3
                            </div>
                        </div>:null
                    }
                    {formNumber===2?
                        <div className="defaultBar">
                            <div className="child">
                                <img src={righttick}  alt={"pointer"}/>
                            </div>
                            <div className="child car">
                                <img src={Car} alt={"pointer"}/>
                            </div>
                            <div className="child milestone3">3
                            </div>
                        </div>:null
                    }
                    {formNumber===3?
                        <div className="defaultBar">
                            <div className="child">
                                <img src={righttick}  alt={"pointer"}/>
                            </div>
                            <div className="child">
                                <img src={righttick}  alt={"pointer"}/>

                            </div>
                            <div className="child car">
                                <img src={Car} alt={"pointer"}/>
                            </div>
                        </div>:null
                    }

                    {(formNumber===1 && formNumber<2)?
                        <div className="blueProgress" style={{width:"145px"}}>
                        </div> :
                        null
                    }
                    {(formNumber === 2 && formNumber<3)?
                        <div className="blueProgress" style={{width:"335px"}}>
                        </div>:
                        null
                    }
                    {(formNumber === 3)?
                        <div className="blueProgress" style={{width:"490px"}}>
                        </div>:
                        null
                    }

                    <ul className="form-heading">
                        <li>Add Company Info</li>
                        <li>Assign Products</li>
                        <li>Setup Admins</li>
                    </ul>
                </div>
            </div>
        )
    }
}