import React from 'react';
import { Link } from 'react-router-dom'

const Banner = ({ childern, title, subtitle, link, linkto }) => {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div />
            <p>{subtitle}</p>
            <Link to={link} className="btn-primary">{linkto}</Link>
        </div>
    );
};

Banner.defaultProps = {
    title: "luxurious rooms",
    subtitle: "deluxe rooms starting at $299",
    link: "/",
    linkto: "Return Home"
}

export default Banner;