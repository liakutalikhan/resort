import React, { Component } from 'react';
import Data from '../data'
const RoomContext = React.createContext();

class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRoom: [],
        featuredRoom: [],
        loading: [],
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,

    }

    componentDidMount() {
        let rooms = this.dataFormate(Data)
        let featuredRoom = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        this.setState({
            rooms,
            featuredRoom,
            sortedRoom: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
    }

    dataFormate(Data) {
        let tempItem = Data.map((item) => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { id, ...item.fields, images }

            return room;
        })
        return tempItem;
    }

    getRoom = (slug) => {
        let tempRoom = [...this.state.rooms]
        const room = tempRoom.find(room => room.slug === slug)
        return room;
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ?
            target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        }, this.filterRooms)

    }

    filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;
        // all the rooms
        let filterRoom = [...rooms];
        // transform value
        capacity = parseInt(capacity)
        // filter by type
        if (type !== 'all') {
            filterRoom = filterRoom.filter(room => room.type === type)
        }
        // filter by capacity 
        if (capacity !== 1) {
            filterRoom = filterRoom.filter(room => room.capacity >= capacity)
        }
        // filter by price 
        filterRoom = filterRoom.filter(room => room.price <= price)
        // filter by size
        filterRoom = filterRoom.filter(room => room.size >= minSize && room.size <= maxSize)
        // filter by breakfast
        if (breakfast) {
            filterRoom = filterRoom.filter(room => room.breakfast === true)
        }
        // filter by pets
        if (pets) {
            filterRoom = filterRoom.filter(room => room.pets === true)
        }
        this.setState({
            sortedRoom: filterRoom
        })
    }
    render() {
        return (
            <RoomContext.Provider value={ { ...this.state, getRoom: this.getRoom, handleChange: this.handleChange } }>
                { this.props.children }
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return (function ConsumerWrapper(props) {
        return <RoomConsumer>
            { value => <Component { ...props } context={ value } /> }
        </RoomConsumer>
    }
    )
}

export { RoomContext, RoomProvider, RoomConsumer };