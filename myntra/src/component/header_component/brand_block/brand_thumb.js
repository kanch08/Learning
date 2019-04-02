import React, {Component} from 'react';
import ReactDom from 'react-router-dom';
import '../stylesheet/thumbnail.css';

class Brandthumbnail extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let { image , brandName , message} = this.props;
        console.log("JSON FILE FETCHING",image);
        console.log("JSON FILE FETCHING",message);
            return(
                <div className="container">
                    <div className="thumbnail">
                        <img src={image} />
                        <div className="brand-info">
                            <p>{brandName}</p>
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
                )    
            }
}
export default Brandthumbnail;