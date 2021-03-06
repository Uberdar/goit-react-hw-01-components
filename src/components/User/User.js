import PropTypes from 'prop-types'; // ES6
import './UserStyle.css';
export default function User({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats__li">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="stats__li">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="stats__li">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
