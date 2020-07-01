import React from 'react';
import './grid.css';
import PropTypes from 'prop-types';
import {data} from '../../constants/mockData';
const defaultProps={
    classname:''
}

const propTypes={
    classname:PropTypes.string
}

const Grid=()=>{
    return(
        <div className="grid-container">
            {data.map(images=> <div className="grid-image-container"> <img src={images.url}></img><span>{images.title}</span></div>)}
        </div>
    )
}

Grid.defaultProps=defaultProps;
Grid.propTypes=propTypes;
export default Grid;