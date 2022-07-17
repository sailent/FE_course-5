/* eslint-disable no-unused-vars */
/* eslint-disable no-octal-escape */
/* eslint-disable no-useless-escape */
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import 'react-datepicker/dist/react-datepicker.css';

export function Events() {
  return [
    {
      id: 1,
      title: 'первый',
      description: 'qwe',
      type: 'cinema',
      timestamp: 1657989745000,
      place: 'Франсия',
      img: 'https://img.freepik.com/free-vector/watercolor-summer-party-poster_23-2148543529.jpg?w=2000',
      price: 500,
    },
    {
      id: 2,
      title: 'второй',
      description: 'asd',
      type: 'theater',
      timestamp: 1655397745000,
      place: 'Итальианно',
      img: 'https://img.freepik.com/free-vector/watercolor-summer-party-poster_23-2148543529.jpg?w=2000',
      price: 500,
    },
    {
      id: 3,
      title: 'третий',
      description: 'zxc',
      type: 'cinema',
      timestamp: 1652719345000,
      place: 'Винница(Венеция)',
      img: 'https://img.freepik.com/free-vector/watercolor-summer-party-poster_23-2148543529.jpg?w=2000',
      price: 500,
    },
    {
      id: 4,
      title: 'четвертый',
      description: 'rty',
      type: 'festival',
      timestamp: 1650127345000,
      place: 'Итальианно',
      img: 'https://img.freepik.com/free-vector/watercolor-summer-party-poster_23-2148543529.jpg?w=2000',
      price: 500,
    },
    {
      id: 5,
      title: 'пятый',
      description: 'fgh',
      type: 'theater',
      timestamp: 1647448945000,
      place: 'Франсия',
      img: 'https://img.freepik.com/free-vector/watercolor-summer-party-poster_23-2148543529.jpg?w=2000',
      price: 500,
    },
    {
      id: 6,
      title: 'шестой',
      description: 'vbn',
      type: 'cinema',
      timestamp: 1645029745000,
      place: 'Франсия',
      img: 'https://img.freepik.com/free-vector/watercolor-summer-party-poster_23-2148543529.jpg?w=2000',
      price: 500,
    },
    {
      id: 7,
      title: 'седьмой',
      description: 'uio',
      type: 'cinema',
      timestamp: 1642351345000,
      place: 'Итальианно',
      img: 'https://img.freepik.com/free-vector/watercolor-summer-party-poster_23-2148543529.jpg?w=2000',
      price: 500,
    },
    {
      id: 8,
      title: 'восьмой',
      description: 'jkl',
      type: 'festival',
      timestamp: 1610815345000,
      place: 'Франсия',
      img: 'https://img.freepik.com/free-vector/watercolor-summer-party-poster_23-2148543529.jpg?w=2000',
      price: 500,
    },
    {
      id: 9,
      title: 'девятый',
      description: 'm,.',
      type: 'theater',
      timestamp: 1613493745000,
      place: 'Франсия',
      img: 'https://img.freepik.com/free-vector/watercolor-summer-party-poster_23-2148543529.jpg?w=2000',
      price: 500,
    },
    {
      id: 10,
      title: 'десятый',
      description: 'aqz',
      type: 'cinema',
      timestamp: 1615912945000,
      place: 'Итальианно',
      img: 'https://img.freepik.com/free-vector/watercolor-summer-party-poster_23-2148543529.jpg?w=2000',
      price: 500,
    },
    {
      id: 11,
      title: 'одиннадцатый',
      description: 'wsx',
      type: 'cinema',
      timestamp: 1618591345000,
      place: 'Винница(Венеция)',
      img: 'https://img.freepik.com/free-vector/watercolor-summer-party-poster_23-2148543529.jpg?w=2000',
      price: 500,
    },
    {
      id: 12,
      title: 'двенадцатый',
      description: 'edc',
      type: 'festival',
      timestamp: 1621183345000,
      place: 'Итальианно',
      img: 'https://img.freepik.com/free-vector/watercolor-summer-party-poster_23-2148543529.jpg?w=2000',
      price: 500,
    },
  ];
}

export default function MainPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [afisha, setAfisha] = useState(Events());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [search, setSearchTitle] = useState();
  const [page, setPage] = useState(1);

  const options = [
    { value: 'cinema', label: 'Cinema' },
    { value: 'theater', label: 'Theater' },
    { value: 'festival', label: 'Festival' },
  ];

  const handleChangeDateFilter = (startOrEndDateFilter, date) => {
    startOrEndDateFilter(date);
  };

  const handleChangeSearch = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleChangePage = (e) => {
    const maxPages = afisha.length / 3;
    if (e.target.value === 'nextPage' && page < maxPages) setPage(page + 1);
    else if (e.target.value === 'prevPage' && page > 1) setPage(page - 1);
  };

  useEffect(() => {
    if (startDate && endDate && !selectedOption) {
      setAfisha(
        Events().filter(
          (obj) => obj.timestamp > Date.parse(startDate)
            && obj.timestamp < Date.parse(endDate),
        ),
      );
    }

    if (startDate && !endDate && !selectedOption) {
      setAfisha(
        Events().filter((obj) => obj.timestamp > Date.parse(startDate)),
      );
    }

    if (!startDate && endDate && !selectedOption) {
      setAfisha(Events().filter((obj) => obj.timestamp < Date.parse(endDate)));
    }

    if (!startDate && !endDate && selectedOption) {
      setAfisha(Events().filter((obj) => obj.type === selectedOption.value));
    }

    if (startDate && endDate && selectedOption) {
      setAfisha(
        Events().filter(
          (obj) => obj.timestamp > Date.parse(startDate)
            && obj.timestamp < Date.parse(endDate)
            && obj.type === selectedOption.value,
        ),
      );
    }

    if (startDate && !endDate && selectedOption) {
      setAfisha(
        Events().filter(
          (obj) => obj.timestamp > Date.parse(startDate)
            && obj.type === selectedOption.value,
        ),
      );
    }

    if (!startDate && endDate && selectedOption) {
      setAfisha(
        Events().filter(
          (obj) => obj.timestamp < Date.parse(endDate)
            && obj.type === selectedOption.value,
        ),
      );
    }

    if (search) {
      setAfisha(Events().filter((obj) => obj.title.match(search)));
    }

    if (search === '') setAfisha(Events());
  }, [startDate, endDate, selectedOption, search]);

  return (
    <div>
      <Header />
      {console.log('render')}
      от
      <DatePicker
        selected={startDate}
        onChange={(date) => handleChangeDateFilter(setStartDate, date)}
      />
      до
      <DatePicker
        selected={endDate}
        onChange={(date) => handleChangeDateFilter(setEndDate, date)}
      />
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <input onChange={(e) => handleChangeSearch(e)} placeholder="поиск" />
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Place</th>
          </tr>
          {afisha.map((e, i) => {
            if (i < page * 3 && i > page * 3 - 4) {
              return (
                <tr key={e.id}>
                  <td>
                    <Link to={`/EventPage?id=${e.id}`}>{e.title}</Link>
                  </td>
                  <td>{e.type}</td>
                  <td>
                    {new Intl.DateTimeFormat('ru-RU', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    }).format(e.timestamp)}
                  </td>
                  <td>
                    {new Intl.DateTimeFormat('ru-RU', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    }).format(e.timestamp)}
                  </td>
                  <td>{e.place}</td>
                  <td>
                    <img
                      alt="poster"
                      src={e.img}
                      width="100px"
                      height="100px"
                    />
                  </td>
                </tr>
              );
            }
            return false;
          })}
        </tbody>
      </table>
      <button
        type="button"
        value="prevPage"
        onClick={(e) => handleChangePage(e)}
      >
        {' '}
        ←
        {' '}
      </button>
      <button
        type="button"
        value="nextPage"
        onClick={(e) => handleChangePage(e)}
      >
        {' '}
        →
        {' '}
      </button>
      <Footer />
    </div>
  );
}
