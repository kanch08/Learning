import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './header_component/stylesheet/carousel.css';
import im1 from './header_component/assets/1.jpg';
import im2 from './header_component/assets/2.jpg';


class Slider extends Component{
    render(){
        return(
            <div className="slider">
                <Carousel>
                    <div>
                        <img src={im1} />
                       
                    </div>
                    <div>
                        <img src={im2} />
                       
                    </div>
                    <div>
                        <img src={im1} />
                    </div>
                </Carousel>
            </div>
         )
    }
}

export default Slider;