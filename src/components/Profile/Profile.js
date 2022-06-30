import PropTypes from 'prop-types';
import { Description, StatList, StatListItem } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <StatList>
        <StatListItem>
          <span>Followers</span>
          <span>{followers}</span>
        </StatListItem>
        <StatListItem>
          <span>Views</span>
          <span>{views}</span>
        </StatListItem>
        <StatListItem>
          <span>Likes</span>
          <span>{likes}</span>
        </StatListItem>
      </StatList>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
