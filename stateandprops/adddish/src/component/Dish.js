import React from "react";

const Dish=(props)=>{
    return <div>
        {
            props.dish.name
           
        }
        {
             props.dish.desc
        }
    </div>
}


export default Dish;