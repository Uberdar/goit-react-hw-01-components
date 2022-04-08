export default function TransactionHistoryItem({ props }) {
  return (
    <>
      {props.map(el => (
        <tr key={el.id}>
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.currency}</td>
        </tr>
      ))}
    </>
  );
}
