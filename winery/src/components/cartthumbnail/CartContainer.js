import React , { Component } from 'react';
import ProductThumbnail from './ProductThumbnail';
import '../stylesheet/cart.css';
import { connect } from 'react-redux';


class CartContainer extends Component{
    render(){
        let arr = this.props.thumb;
        return(
            <div className="productContainer">
                {
                    arr.map((item,index) => {
                            return(
                                <ProductThumbnail
                                    image = {item.image}
                                    productname = {item.productname}
                                    category = {item.category}
                                    price = {item.price}
                                    alt = {item.alt}
                                    key={index}
                                    defaultColor = {item.defaultcolor}
                                />
                            )
                        }
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        thumb: state.reducer.thumb
    }
}

export default connect(mapStateToProps,'')(CartContainer);