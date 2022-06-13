import { useSearchParams } from 'react-router-dom';

const bookDescription = [
  { id: 1, desc: 'Продам гараж' },
  { id: 2, desc: 'Волшебная книга, здесь могла быть ваша реклама' },
  { id: 3, desc: 'Lorem ipsum dolorem' },
  { id: 4, desc: 'Четвертая книга' },
  { id: 5, desc: 'Пятая книга' },
  { id: 6, desc: 'Шестая книга' },
];

export default function BookDesc() {
  const [searchParams] = useSearchParams();
  const bookId = searchParams.get('book_id');
  return <div>{bookDescription.filter((id) => id.id === +bookId)[0].desc}</div>;
}
