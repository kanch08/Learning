import React, { Component } from "react";
import styled from "styled-components";
import car from "./assets/Car.png";
import checkmark from './assets/checkmark.png';

export class Carprogress extends Component {
    render() {
        const { progress, completed } = this.props;
        return (
            <div>
                <div className="customer">
                    <h1>New customer</h1>
                </div>
                <div className="progress-bar">

                    <StyledProgressBarWrapper
                        progress={progress}
                        completed={completed}
                        className="parent"
                    >
                        <div className="gray-strip">
                            <div className="numberCircle first">1</div>
                            
                            <div className="step step1">Add Company Info </div>

                            <div className="numberCircle second">2</div>
                            <div className="step step2">Assign Products </div>


                            <div className="numberCircle third">3</div>
                            <div className="step step3">Setup Admins</div>

                            <div className="car">
                                <img src={car} alt="car-logo" />
                            </div>

                            <div className="blue-strip" />
                        </div>
                    </StyledProgressBarWrapper>
                </div>
            </div>
        );
    }
}


const StyledProgressBarWrapper = styled.div`

  
  .gray-strip{
    content:"";
    position:absolute;
    width:700px;
    left:50%;
    transform:translateX(-50%);
    height:4px;
    background-color:#dee2e5;
   }
  
  .blue-strip{
    content:"";
    postion:absoulte;
    width:${props => props.progress}%;
    background-color:#0077b6;
    height:5px;
    
  }
  
  
  
  .numberCircle { 
      position:absolute;
      margin-top:-10px;
      width: 23px;
      height : 23px;
      line-height: 20px;
      border-radius: 50%;
      text-align: center;
      font-size: 12px;
      border: 2px solid #cbcbcb;
      background-color:#cbcbcb;
      color:#989494;
  }
  .checkmark {
       position : absolute;
       top : -7px;
       left : -6px;
       display:${props => (props.completed === "first" ? "none" : "")};
       left:${props => (props.completed === "first" ? "" : "26%")};
       
  }
  .step{
        position:absolute;
        top:30px;
        line-height: 20px;
        text-align: center;
        font-size: 14px;
        font-weight:bold;
       
  
  }
  .step1{
          left:17%;
          color:${props => (props.completed === "first" ? "#0077b6" : "#989494")};
  }
    
  .step2{
     left:47%;
     color:${props => (props.completed === "second" ? "#0077b6" : "#989494")};  
  }
  
  .step3{
    left:74%;  
    color:${props => (props.completed === "third" ? "#0077b6" : "#989494")};
  }  
  .car{
    color:blue;
    position:absolute;
    top:-10px;
    left:${props => props.progress - 1}%; 
  }
  
  .first{
    display:${props => (props.completed === "first" ? "none" : "")};
    left:${props => (props.completed === "first" ? "" : "26%")};

  }
  .second{
    display:${props => (props.completed === "second" ? "none" : "")};
    left:${props => (props.completed === "second" ? "" : "49%")};
  
  }
  
  .third{
    display:${props => (props.completed === "third" ? "none" : "")};
    left:${props => (props.completed === "third" ? "none" : "75%")};

  }


`;

export default Carprogress;