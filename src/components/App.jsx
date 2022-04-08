import User from './User/User';
import user from '../json/user.json';
import data from '../json/data.json';
import Statistic from './Statistic/Statistic';
import FriendList from './FriendList/FriendList';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
