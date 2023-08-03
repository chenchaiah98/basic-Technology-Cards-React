// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  console.log(title, description, imgUrl, className)
  return (
    <li className={`${className} card`}>
      <div className="">
        <h3>{title}</h3>
        <p className="description">{description}</p>
      </div>
      <div className="img-container">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
