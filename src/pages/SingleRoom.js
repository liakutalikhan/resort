import React, { Component } from 'react';
import { RoomContext } from '../component/Context';
import defaultBcg from '../images/room-1.jpeg'
import { Link } from 'react-router-dom';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import StyledHero from '../component/StyledHero';

class SingleRoom extends Component {
    constructor (props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;

    render() {

        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return (
                <div className="error">
                    <h3>no such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                </div>
            )
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        const [mainImg, ...RestImg] = images;
        return (
            <>
                <StyledHero img={ mainImg || this.state.defaultBcg }>
                    <Banner
                        title={ `${name} room` }
                        subtitle=""
                        link="/rooms"
                        linkto="Back to Rooms"
                    />
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        { RestImg.map((item, index) => {
                            return <img key={ index } src={ item } alt={ name } />
                        }) }
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{ description }</p>
                        </article>
                        <article className="desc">
                            <h3>Info</h3>
                            <h6>Price: ${ price }</h6>
                            <h6>Size: ${ size } SQFT</h6>
                            <h6>
                                Max Capacity: { " " }
                                { capacity > 1 ? `${capacity} person` : `${capacity} person` }
                            </h6>
                            <h6>{ pets ? "Pets allowed" : "No pets allowed" }</h6>
                            <h6>{ breakfast && "free breakfast included" }</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        { extras.map((item, index) => {
                            return <li key={ index }>- { item }</li>
                        }) }
                    </ul>
                </section>
            </>
        );
    }
}

export default SingleRoom;