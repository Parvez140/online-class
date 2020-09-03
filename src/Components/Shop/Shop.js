import React from 'react';
import fakeData from '../../fakeData/fakeData'; 
import { useState } from 'react';
import './Shop.css';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first15 = fakeData.slice(0,15);
    const [courses, setCourses] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) =>{
        console.log(course);
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="course-container">
                {
                    courses.map(pd => <Course handleAddCourse = {handleAddCourse} course={pd}></Course>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart> 
            </div>
        </div>
    );
};

export default Shop;