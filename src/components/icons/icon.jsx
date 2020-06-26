import React from 'react';
import './icon.css';
import propTypes from 'prop-types';
import classnames from "classnames";
const defaultprops={
    className:''
}
const proptypes={
    className:propTypes.string
}
const Icon=({className})=>{
    return (
        <span className={classnames({"icon":true,[className]:className})}></span>
    )
}
Icon.propTypes=proptypes;
export default Icon;