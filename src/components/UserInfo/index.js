import './index.css'

const UserInfo = props => {
  const {userDetails} = props

  return (
    <div className="profile-details">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
      />
      <h1 style={{fontWeight: '900', fontFamily: 'roboto', fontSize: '20px'}}>
        Wade Warren
      </h1>
      <p>Software developer at UK</p>
    </div>
  )
}

export default UserInfo
