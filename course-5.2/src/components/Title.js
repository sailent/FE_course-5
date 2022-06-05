/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${(props) => props.color || 'green'};
`;

function Title(props) {
  return <StyledTitle {...props} />;
}

export default Title;
