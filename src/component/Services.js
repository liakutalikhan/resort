import React from 'react';
import Title from './Title';
import ServiceData from './ServiceData';
import IconBox from './IconBox';

const Services = () => {
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                { ServiceData.map((item, index) => {
                    return <IconBox
                        key={ index }
                        icon={ item.icon }
                        title={ item.title }
                        info={ item.info }
                    />
                }) }
            </div>
        </section>
    );
};

export default Services;