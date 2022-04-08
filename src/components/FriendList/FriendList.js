import x from './FriendListStyle.module.css';
import FriendListItem from './FriendListItem';
export default function FriendList({ friends }) {
  return (
    <ul className={x.friendList}>
      {friends.map(el => (
        <li key={el.id}>
          <FriendListItem props={el} />
        </li>
      ))}
    </ul>
  );
}
