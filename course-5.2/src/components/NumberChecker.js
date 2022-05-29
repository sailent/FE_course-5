import PropTypes from 'prop-types';

export default function NumberChecker(n) {
  const number = n;
  const isPrime = (num) => {
    let color = 'red';
    if (num === 1) color = 'yellow';
    if (num === 0) color = 'green';
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        if (num % 2 !== 0) return <p className="yellow">{num}</p>;
        if (num % 2 === 0) return <p className="green">{num}</p>;
      }
    }
    return <p className={color}>{num}</p>;
  };
  return (
    <div key={number} className="container__number">
      {isPrime(number)}
    </div>
  );
}

NumberChecker.prototypes = {
  n: PropTypes.number.isRequired,
};
