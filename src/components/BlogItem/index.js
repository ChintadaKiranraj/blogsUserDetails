import './index.css'

const BlogItem = props => {
  const {blogItem} = props

  const {title, description, publishedDate} = blogItem

  return (
    <li>
      <div className="title-date">
        <h1
          style={{
            fontFamily: 'timesNewRoman',
            fontWeight: '900',
            fontSize: '20px',
            color: '#12022f',
          }}
        >
          {title}
        </h1>
        <p>{publishedDate}</p>
      </div>
      <hr />

      <p style={{fontWeight: '350', color: '#616e7c'}}>{description}</p>
    </li>
  )
}

export default BlogItem
