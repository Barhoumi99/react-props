import PropTypes from 'prop-types'
const Profile = (props) => {
    return(
        <div>
            {props.children}
            <h2>{props.fullName}</h2>
            <p>{props.bio}</p>
            <h4>{props.profession}</h4>
            
            <button onClick={props.alertme}> alert me </button>
        </div>
    )
}
Profile.propTypes= {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}
export default Profile