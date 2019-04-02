import React,{Component} from 'react';
import data from './images';
import Brandthumbnail from './header_component/brand_block/brand_thumb';
import './header_component/stylesheet/thumbnail.css';

class Brands extends Component{
    constructor(props){
        super(props);        
    }
    render(){
        let arr = data["brands-focus-images"];
        return(
            <div className="container">
            <h2>Brand in focus</h2>
            <p>Show some brand love</p>
                {
                    arr.map(item => {
                    return(
                    
                            <div className="thumbnail">
                                <Brandthumbnail 
                                image={item.image} 
                                brandName={item.brandname} 
                                message={item.message}
                                />
                            </div>
                    
                    )
                })      
            }
            </div>
        )
            
    }
}
export default Brands;