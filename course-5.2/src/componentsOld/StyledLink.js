/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import Link from './Link';

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;
function StyledLinkMain() {
  return (
    <div>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink className="red">Styled, exciting Link</StyledLink>
    </div>
  );
}

export default StyledLinkMain;
