import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import RoomContainer from '../component/RoomContainer'

const Room = () => {
    return (
        <>
            <Hero heroBg="roomsHero">
                <Banner
                    title="Our rooms"
                    subtitle=""
                    link="/"
                />
            </Hero>
            <RoomContainer />
        </>
    )
}

export default Room
