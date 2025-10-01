import './RatingTestimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingTestimonial = ({ name, rating, img, comment }) => {

    const starRating = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<FontAwesomeIcon key={i} className='py-3 mt-2 fs-5' icon={faStar} />);
        }
        return stars;
    };

    return (
        <div id='rating'>
            <div className='m-3'>
                <div id='rating-stars'>
                    {starRating(rating)}
                </div>
                <div className='d-flex align-items-center'>
                    <img src={img} className="w-50" />
                    <h5 className='ms-3'>{name}</h5>
                </div>
                <p className='my-2'>{comment}</p>
            </div>
        </div>
    )
}

export default RatingTestimonial