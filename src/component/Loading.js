import React from 'react';
import loadImg from '../images/gif/loading-arrow.gif';

const Loading = () => {
    return (
        <div className="loading">
            <h4>room data loading...</h4>
            <img src={ loadImg } alt="Loding Image" />
        </div>
    );
};

export default Loading;