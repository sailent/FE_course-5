/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link } from 'react-router-dom'

function Link({ className, children }) {
  return <a className={className}>{children}</a>;
}

export default Link;
