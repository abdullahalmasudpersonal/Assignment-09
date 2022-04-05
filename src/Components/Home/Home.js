import React from 'react';
import image from './nokia-laptop-2.png';
import './Home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import useReview from '../../Hooks/useReview';
import ReviewInfo from '../ReviewInfo/ReviewInfo';


const Home = () => {
    const [review, setReview] = useReview();
    return (
        <div>
            <div className='laptop-info mt-5 container btn-demo'>
                <div>
                    <h1 class="card-title">The world most powerful and Beautiful laptop</h1>
                    <p class="">Laptops are evolving at a dramatic pace, and this is the place to track their progress, or lack thereof. The best laptop is out there, and our laptop reviews dig deep into what’s new from the world’s biggest manufacturers to help you find it. From each new iteration of the Apple MacBook and Microsoft Surface to what’s coming up from likes of Dell, HP, Lenovo, and more, The Verge has you covered.</p>
                    <button>Live demo</button>
                </div>
                <div>
                    <img src={image} alt="laptop" />
                </div>
            </div>
            <h2><strong>Coustomer Reviews({review.length})</strong></h2>
            <div className='costomer-review'>
                {
                    review.map(review => <ReviewInfo
                        key={review._id}
                        review={review}
                    ></ReviewInfo>)
                }
            </div>
            <div className='coustomer-btn'>
                    <button className='coustomer-btn-min'>See All Reviews</button>
                </div>
        </div>

    );
};

export default Home;