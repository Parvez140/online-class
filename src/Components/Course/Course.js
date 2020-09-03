import React from 'react';

const course = (props) => {
    // console.log(props);
    const {author, img, price,title} = props.course;
    return (
        <div className="col-md-4 float-left p-3">
            <img src={img} className="w-100" alt=""/>
            <h6>{title}</h6>
            <p><small className="text-secondary">By {author}</small></p>
            <h3 className="text-danger">${price}</h3>
            <button className="btn btn-success" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</button>
        </div>
    );
};

export default course;