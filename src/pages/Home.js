import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import Services from '../component/Services'
import FeaturedRooms from '../component/FeaturedRooms'

const Home = () => {
    return (
        <>
            <Hero>
                <Banner linkto="Our Rooms" link="/rooms" />
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}

export default Home;
