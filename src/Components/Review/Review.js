import React from 'react';
import useReview from '../../Hooks/useReview';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import './Review.css'


const Review = () => {
    const [review, setReview] = useReview();
    return (
        <div className='div-container'>
            <div className='review-container'>
                {
                    review.map(review => <ReviewInfo
                        key={review._id}
                        review={review}
                    ></ReviewInfo>)
                }
            </div>
        </div>
    );
};

export default Review;