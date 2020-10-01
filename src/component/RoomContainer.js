import React from 'react';
import { withRoomConsumer } from './Context';
import Loading from './Loading';
import RoomFilter from './RoomFilter';
import RoomLists from './RoomLists';

const RoomContainer = ({ context }) => {
    const { loading, sortedRoom, rooms } = context;
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomFilter rooms={ rooms } />
            <RoomLists rooms={ sortedRoom } />
        </>
    );
};

export default withRoomConsumer(RoomContainer);