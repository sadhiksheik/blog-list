// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <li className="li-container">
      <div className="post-date-container">
        <h1 className="post">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
