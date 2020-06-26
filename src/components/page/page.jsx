import React from 'react';
import './page.css';
import PropTypes from "prop-types";
import classnames from "classnames";
import Button from '../button/button';
const defaultProps={
    id:'',
    text:'',
    className:''
}

const propTypes={
    id:PropTypes.string,
    text:PropTypes.string,
    className:PropTypes.string
}

 const Page=({id,text,className})=>{
     return (
        <div className={classnames({"container1":true, [className]: className })} id={id}>
                <div className="container1__info">
                    <p>&#34;{text}&#34;</p>
                    <Button label="Shop now" id={id}/>
                </div>
        </div>
     )
 }

 Page.defaultProps=defaultProps;
 Page.propTypes=propTypes;
 export default Page;