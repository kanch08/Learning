import React, {Component} from 'react';


class ApplyProduct extends Component {
    render(){
        return(
            <div className="applyProduct">
                <div>
                    <h3>Enabled Products</h3>
                    <form>

                        <div className="check">
                            <input type="checkbox" name='fixedandVariableBar' />
                            <label>Fixed and Variable Bar</label>
                        </div>
                        <div className="check">
                            <input type="checkbox" name="centPerMile"/>
                            <label>Cent Per Mile</label>
                        </div>
                        <div className="check">
                            <input type="checkbox" name="technology"/>
                            <label>Technology Only</label>
                        </div>
                    </form>
                </div>

            </div>

        )
    }

}

export default ApplyProduct;