import friends from './friends.json';
import { FriendListItem } from './FriendListItem';

export const FriendList = () => {
  return (
    <ul className="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
};
