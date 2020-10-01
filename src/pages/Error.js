import React from 'react';
import Hero from '../component/Hero';
import Banner from '../component/Banner';

const Error = () => {
    return (
        <>
            <Hero>
                <Banner
                    title="404"
                    subtitle="Page Not Found"
                    link="/"
                />
            </Hero>
        </>
    );
};

export default Error;