import React from 'react';
import './ReviewInfo.css'

const ReviewInfo = (props) => {
    const { name, image, comment,rating } = props.review;
    return (

        <div className='review-info'>
                <img src={image} alt='' />
                <h3><strong>{name}</strong></h3>
            <p><strong>Comment:</strong> {comment}</p>
            <p><strong>Ratings: {rating}</strong></p>
        </div>


    );
};

export default ReviewInfo;

