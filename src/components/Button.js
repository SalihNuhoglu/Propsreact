import React, {useState} from "react";
import "../styles/button.css"

const Button=(props)=>{
  const [tiklandi,setTiklandi]= useState(false);
  console.log(props);
  console.log("tıklandı" , tiklandi);
    
    
  return (
      
    <div>
      {props.type === "primary" && (
        <button className={props.type} 
        onClick={ ()=>{
          setTiklandi(true);
        }}>
           {tiklandi === true ? "tıklandı" : (props.buttonText)}
        </button> 
      )}
      {props.type === "secondary" && (
        <button className={props.type} 
        onClick={ ()=>{
          setTiklandi(true);
        }}>
           {tiklandi === true ? "tıklandı" : (props.buttonText)}
        </button> 
      )}
      {props.type === "danger" && (
        <button className={props.type} 
        onClick={ ()=>{
          setTiklandi(true);
        }}>
           {tiklandi === true ? "tıklandı" : (props.buttonText)}
        </button> 
      )}
    </div>
  );
};

export default Button; 