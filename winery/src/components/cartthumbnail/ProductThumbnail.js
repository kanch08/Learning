import React , { Component } from 'react';
import CartMenuOption from './CartMenuOption';
import { connect } from 'react-redux';

class ProductThumbnail extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartMenuRender : false,
            selectedImage:"red",
        }
    }

    cartMenuOnOver = (event) => {
        event.stopPropagation();
        this.setState({
            cartMenuRender : !this.state.cartMenuRender,
        })
    };

    handleChange=(e)=>{
        console.log("radio button change func called with event",e.target.value);
        this.setState({
            selectedImage:e.target.value
        })
    }

    render(){
        const {productname , price , alt} = this.props;
        let  imageRender = this.props.images;
        let  imageKeys=Object.keys(this.props.images[0]);

        return(
            <div className="productThumbnail"
                 onMouseEnter={this.cartMenuOnOver}
                 onMouseLeave={this.cartMenuOnOver}
            >
                {
                    imageKeys.map(item => {
                            return(
                                 this.state.selectedImage===item?
                                <div className="image">
                                    <img src={imageRender[0][item]} alt={alt} />
                                </div>:null
                            )
                        }
                    )
                }
                <div className="detail">
                    <p>{productname}</p>
                    <p>${price}</p>
                </div>
                <div className={`${productname} buttonNav`}>
                    {
                        this.state.cartMenuRender ?
                            <CartMenuOption
                                onRadioChange={this.handleChange}
                                imageKeys={imageKeys}
                                name={productname}
                            /> : null
                    }
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        images : state.reducer.images
    }
}
export default connect(mapStateToProps,'')(ProductThumbnail);