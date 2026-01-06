import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';

/**
 * CountUp Component
 * 
 * Animates a number counting up on scroll
 * Perfect for statistics, metrics, achievements
 * 
 * @component
 * @param {Object} props
 * @param {number} props.end - Final value to count to
 * @param {number} props.duration - Animation duration in seconds
 * @param {string} props.label - Label for the stat
 * @param {string} props.suffix - Suffix (e.g., '+', '%')
 * @param {string} props.className - Additional CSS classes
 * 
 * @example
 * <CountUp end={100} label="Projects Completed" suffix="+" />
 */
const CountUp = ({
  end = 100,
  duration = 2,
  label = '',
  suffix = '',
  className = '',
}) => {
  const { ref, value } = useCountUp({ end, duration });

  return (
    <div ref={ref} className={`count-up ${className}`}>
      <div className="count-value">
        {value}
        {suffix}
      </div>
      {label && <div className="count-label">{label}</div>}
    </div>
  );
};

export default CountUp;
