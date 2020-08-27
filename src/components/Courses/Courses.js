import React, { useState } from 'react';
import fakeData from '../../fakeData/coursesFake';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Courses = () => {
    const [courses , setCourses] = useState(fakeData);
    const [cart , setCart] = useState([]);
    const handleAddCourse = (details) => {
        const newCart = [...cart, details]
        setCart(newCart);
    }
    return (
        <div className = "container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-8">
                    {
                        courses.map(course => <Course details = {course} key = {course.id} handleAddCourse = {handleAddCourse}></Course>)
                    }
                </div>
                <div className = "col-md-4">
                    <Cart cart = {cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Courses;