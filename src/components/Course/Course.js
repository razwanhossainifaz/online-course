import React from 'react';
import './Course.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Course = (props) => {
    const {name , instructor , courseDuration , img , amount} = props.details;
    return (
        <div className="card-deck">
            <div className="card mt-2 mb-2 card-style">
                <img className="img-fluid" src={img} class="card-img-top" alt=""/>
                <div className="card-body">
                    <h4 className="card-title name-style">Name : {name}</h4>
                    <p className="card-text ins-style">Instructor : {instructor}</p>
                    <p className="card-text course-style">Course-duration : {courseDuration}</p>
                    <p className="card-text amount-style">Amount : {amount}</p>
                </div>
                <div className="card-footer">
                    <button className = "btn-style" onClick = {() => props.handleAddCourse(props.details)}>Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;