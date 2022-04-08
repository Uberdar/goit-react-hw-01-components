import './TransactionHistoryStyle.css';
import TransactionHistoryItem from './TransactionHistoryItem';
export default function TransactionHistory(props) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionHistoryItem props={props.items} />
      </tbody>
    </table>
  );
}
