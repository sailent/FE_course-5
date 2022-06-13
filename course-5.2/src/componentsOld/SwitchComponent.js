import { useRef } from 'react';

export default function HideAndSeekComponents() {
  const refOfParagraph = useRef(null);
  const refOfButton = useRef(null);

  const refOfBox1 = useRef(null);
  const refOfBox2 = useRef(null);
  const refOfBox3 = useRef(null);

  const hideParagraph = () => {
    if (refOfButton.current.value === 'Скрыть') {
      refOfParagraph.current.style.display = 'none';
      refOfButton.current.value = 'Показать';
    } else {
      refOfParagraph.current.style.display = 'block';
      refOfButton.current.value = 'Скрыть';
    }
  };

  const hideBox = (e) => {
    const { className } = e.target;
    switch (className) {
      case 'green box':
        refOfBox1.current.hidden = true;
        refOfBox3.current.hidden = false;
        break;
      case 'blue box':
        if (
          refOfBox1.current.hidden === true
          && refOfBox3.current.hidden === true
        ) {
          refOfBox1.current.hidden = false;
          refOfBox3.current.hidden = false;
        } else {
          refOfBox1.current.hidden = true;
          refOfBox3.current.hidden = true;
        }

        break;
      case 'red box':
        refOfBox3.current.hidden = true;
        refOfBox1.current.hidden = false;
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <hr />
      <div>
        <input
          type="button"
          ref={refOfButton}
          value="Скрыть"
          onClick={hideParagraph}
        />
        <p ref={refOfParagraph}>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="container">
        <div
          ref={refOfBox1}
          role="button"
          tabIndex={0}
          aria-label="green box"
          className="green box"
          onClick={hideBox}
          onKeyDown={hideBox}
        />
        <div
          ref={refOfBox2}
          role="button"
          tabIndex={-1}
          aria-label="blue box"
          className="blue box"
          onClick={hideBox}
          onKeyDown={hideBox}
        />
        <div
          ref={refOfBox3}
          role="button"
          tabIndex={-2}
          aria-label="red box"
          className="red box"
          onClick={hideBox}
          onKeyDown={hideBox}
        />
      </div>
    </div>
  );
}
