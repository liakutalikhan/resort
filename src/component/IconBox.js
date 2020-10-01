import React from 'react';

const IconBox = ({ icon, title, info }) => {
    return (
        <article className="service">
            <span>{ icon }</span>
            <h6>{ title }</h6>
            <p>{ info }</p>
        </article>
    );
};

export default IconBox;