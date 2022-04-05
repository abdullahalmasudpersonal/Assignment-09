import React from 'react';
import useReview from '../../Hooks/useReview';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import './Review.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Review = () => {
    const [review, setReview] = useReview();
    return (
            <div className='review-container'>
                <div className='cart-review-container'>
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