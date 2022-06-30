import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListItemStyled, FriendListStyled } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItemStyled key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendListItemStyled>
      ))}
    </FriendListStyled>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
    })
  ),
};
