import './StatisticStyle.css';
export default function Statistic(props) {
  function RandomBGColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let color = '#' + randomColor;
    return color;
  }
  return (
    <section className="statistics">
      {props.title ? <h2 className="title">Upload stats</h2> : ''}
      <ul className="stat-list">
        {props.stats.map(el => (
          <li
            className="item"
            key={el.id}
            style={{ backgroundColor: RandomBGColor() }} //Generating random BG
          >
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
