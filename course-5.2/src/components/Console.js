/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Line from './Line';

// eslint-disable-next-line no-unused-vars
const Theme = {
  color: 'orange',
  background: 'white',
};
const breatheAnimation = keyframes`
 0% { height: 25px; width: 50px; }
 100% { height: 100px; width: 125px; opacity: 0.6; }
`;
const ConsoleMain = styled.div`
  width: 100%;
`;
const ConsoleContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:hover {
    cursor: default;
  }
`;
const Button = styled.button`
  background: black;
  font-size: 14px;
  color: ${(props) => props.color || 'green'};
  border: 1px solid ${(props) => props.color || 'green'};
  animation-name: ${breatheAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
const StyledConsole = styled.textarea`
  background: black;
  font-size: 14px;
  border: none;
  resize: none;
  color: ${(props) => props.color || 'green'};
  min-width: 99%;
  min-height: 500px;
  white-space: pre;
  overflow-wrap: normal;
  overflow-x: hidden;
  overflow-y: hidden;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: default;
  }
`;
function Console() {
  const refClear = useRef(null);
  const [lines, setLines] = useState([]);
  const [theme, setTheme] = useState(Theme);

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      e.target.setSelectionRange(0, 0);
      setLines([...lines, `${window.location.href}${e.target.value}`]);
      e.target.value = '';
      e.target.setSelectionRange(0, 0);
    }
  };

  const changeTheme = () => {
    if (theme.color === 'orange') setTheme({ ...theme, color: 'blue' });
    else if (theme.color === 'blue') setTheme({ ...theme, color: 'green' });
    else if (theme.color === 'green') setTheme({ ...theme, color: 'orange' });
  };

  useEffect(() => {
    refClear.current.disabled = true;
    refClear.current.style.cursor = 'not-allowed';
  });

  useEffect(() => {
    if (!lines.length) {
      refClear.current.disabled = true;
      refClear.current.style.cursor = 'not-allowed';
    } else {
      refClear.current.disabled = false;
      refClear.current.style.cursor = 'default';
    }
  }, [lines]);

  return (
    <ConsoleMain>
      <ConsoleContent {...theme}>
        {lines.map((line) => (
          <Line {...theme}>{line}</Line>
        ))}
        <StyledConsole {...theme} onKeyPress={onKeyPress} />
      </ConsoleContent>
      <Button
        {...theme}
        type="button"
        ref={refClear}
        onClick={() => setLines([])}
      >
        Clear
      </Button>
      <Button {...theme} type="button" onClick={() => changeTheme()}>
        Theme
      </Button>
    </ConsoleMain>
  );
}
export default Console;
