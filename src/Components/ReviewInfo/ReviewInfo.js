import React from 'react';
import './ReviewInfo.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const ReviewInfo = (props) => {
    const { name, image, comment, rating } = props.review;
    return (

        <div className='mt-5'>
            <div className=' review-info h-100'>
                <img src={image} alt='' />
                <h3><strong>{name}</strong></h3>
                <p><strong>Comment:</strong> {comment}</p>
                <p><strong>Ratings: {rating}</strong></p>
            </div>
        </div>


    );
};

export default ReviewInfo;

