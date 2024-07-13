import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import { useRef, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {

    const minPriceRef = useRef(null);
    const maxPriceRef = useRef(null);
    const { filterItems , clearFilter} = useContext(StoreContext);

    const handleSearch = () => {
        const minPrice = minPriceRef.current.value;
        const maxPrice = maxPriceRef.current.value;
        filterItems(minPrice, maxPrice, category);
        // Clear input fields
        minPriceRef.current.value = '';
        maxPriceRef.current.value = '';
    };


    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque commodi mollitia sit odit magni laborum iure culpa voluptatem libero facilis.</p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
            <h2>Filter by price</h2>
            <div className="filter-price">
                <div className="min-div">
                    <label htmlFor="min">enter minimum price:</label>
                    <input type="text" className='min' id='min' ref={minPriceRef} />
                </div>
                <div className="max-div">
                    <label htmlFor="max">enter minimum price:</label>
                    <input type="text" className='max' id='max' ref={maxPriceRef} />
                </div>
                <button className='filter-btn' onClick={handleSearch}>search</button>
                <button className='clear-filter-btn' onClick={clearFilter}>clear filters</button>
            </div>
            <hr />
        </div>
    );
}

export default ExploreMenu;
