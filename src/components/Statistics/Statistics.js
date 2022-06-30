import PropTypes from 'prop-types';
import { StatList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </StatList>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
