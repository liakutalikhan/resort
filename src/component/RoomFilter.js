import React, { useContext } from 'react';
import { RoomContext } from './Context';
import Title from './Title'

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
const RoomFilter = () => {
    const context = useContext(RoomContext);
    const { sortedRoom, rooms, handleChange, type, capacity, price, maxPrice, minPrice, maxSize, minSize, breakfast, pets } = context

    // get unique types
    let types = getUnique(rooms, 'type');
    // add additional type all
    types = ['all', ...types]

    types = types.map((item, index) => {
        return <option value={ item } key={ index }> { item } </option>
    })
    // guest
    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
        return <option value={ item } key={ index }> { item } </option>
    })

    return (
        <section className="filter-container">
            <Title title="search Rooms" />
            <form className="filter-form">
                {/* select type */ }
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={ type } className="form-control" onChange={ handleChange }>
                        { types }
                    </select>
                </div>
                {/* guest */ }
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select name="capacity" id="capacity" value={ capacity } className="form-control" onChange={ handleChange }>
                        { people }
                    </select>
                </div>
                {/* pice */ }
                <div className="form-group">
                    <label htmlFor="price">Room Price ${ price }</label>
                    <input type="range" name="price" id="price" value={ price } min={ minPrice } max={ maxPrice } className="form-control" onChange={ handleChange } />
                </div>
                {/* size */ }
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={ minSize } className="size-input" onChange={ handleChange } />
                        <input type="number" name="maxSize" id="size" value={ maxSize } className="size-input" onChange={ handleChange } />
                    </div>
                </div>
                {/* extras */ }
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={ breakfast } onChange={ handleChange } />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={ pets } onChange={ handleChange } />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default RoomFilter;