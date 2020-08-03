import React from 'react';
import PropTypes from "prop-types";
import './button.css';
import {Link} from 'react-router-dom';
const defaultProps={
    label:'',
    id:''
}

const propTypes={
    label:PropTypes.string,
    id:PropTypes.string
}
const Button=({label,id})=>{
return (
<button className="button button--container1-button">{label}</button>
)
}

Button.defaultProps=defaultProps;
Button.propTypes=propTypes;
export default Button;