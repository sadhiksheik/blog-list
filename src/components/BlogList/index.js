// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul>
      {blogsList.map(each => (
        <BlogItem key={each.id} details={each} />
      ))}
    </ul>
  )
}

export default BlogList
