import React from 'react';
import Roome from './Roome';

const RoomLists = ({ rooms }) => {
    if (rooms <= 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunately no room found in your search parameter</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                { rooms.map(item => {
                    return <Roome key={ item.id } room={ item } />
                }) }
            </div>
        </section>
    );
};

export default RoomLists;