import { useState } from 'react';

export default function CustomSelect() {
  const options = [
    { label: 'Chocolate', description: 'моя последняя нервная клетка отмерла' },
    {
      label: 'Strawberry',
      description:
        'каждый раз мою дз на 50% делает гугл, хоть вторые 50% взяты с урока :(',
    },
    {
      label: 'Vanilla',
      description:
        'хотел использовать библиотеку Select, так там с Value хрен разберешься',
    },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <hr />
      <select onChange={handleChange}>
        {options.map((item) => (
          <option key={item.label}>{item.label}</option>
        ))}
      </select>
      <p>
        {options.filter((val) => val.label === selectedOption)[0].description}
      </p>
    </div>
  );
}
