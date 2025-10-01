import './WeekSpecials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons'

const WeekSpecial = ({ img, title, price, description }) => {
  return (
    <div className='mb-2' id='specials-card'>
      <img src={img} className='object-fit-cover w-100' />
      <div className='d-flex justify-content-between'>
        <h5 className='my-3 mx-3 h-auto'>{title}</h5>
        <p className='m-3 h-auto' id='specials-price'>{price}</p>
      </div>
      <p className='mx-3' >{description}</p>
      <div className='d-flex align-items-end'>
        <h5 className='mx-3 my-0 py-3'>Order Delivery</h5>
        <FontAwesomeIcon className='py-3 fs-4' icon={faPersonBiking} />
      </div>

    </div>
  )
}

export default WeekSpecial