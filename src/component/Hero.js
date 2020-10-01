import React from 'react';

const Hero = ({ children, heroBg }) => {
    return (
        <header className={heroBg}>{children}</header>
    );
};

Hero.defaultProps = {
    heroBg: "defaultHero"
}

export default Hero;