import x from './FriendListStyle.module.css';
export default function FriendListItem({ props }) {
  return (
    <>
      <span className={props.isOnline ? x.isonline : x.isoffline}></span>
      <img
        className={x.avatar}
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={x.name}>{props.name}</p>
    </>
  );
}
