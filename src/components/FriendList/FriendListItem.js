import PropTypes from 'prop-types';
import { Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
