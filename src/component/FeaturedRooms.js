import React, { Component } from 'react';
import { RoomContext } from './Context';
import Loading from './Loading';
import Roome from './Roome';
import Title from './Title';

class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRoom: featureItem } = this.context
        featureItem = featureItem.map(room => {
            return <Roome key={ room.id } room={ room } />

        })

        return (
            <section className="featured-rooms" >
                <Title title="feature rooms" />
                <div className="featured-rooms-center">
                    { loading ? <Loading /> : featureItem }
                </div>
            </section>
        );
    }
}

export default FeaturedRooms;