import './WeekSpecials.css'

const WeekSpecial = ({ img, title, description }) => {
  return (
    <div id='specials-card'>
        <img src={img} className='w-100'/>
        <h5 className='mt-2'>{title}</h5>
        <p>{description}</p>
        <h6>Order Delivery</h6>
    </div>
  )
}

export default WeekSpecial