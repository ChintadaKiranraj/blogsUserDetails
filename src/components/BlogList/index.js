import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {}

  render() {
    const {blogsList} = this.props

    return (
      <ul
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItem: 'center',
          listStyleType: 'none',
          paddingRight: '20px',
          paddingLeft: '20px',
        }}
      >
        {blogsList.map(blogItem => (
          <BlogItem blogItem={blogItem} key={blogItem.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
