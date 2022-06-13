/* eslint-disable react/prop-types */
import { createContext, useState, useMemo } from 'react';

export const EmailContext = createContext([]);

export default function SetEmail({ children }) {
  const [email, setEmail] = useState([]);
  const value = useMemo(() => ({ email, setEmail }), [email]);
  return <EmailContext.Provider value={value}>{children}</EmailContext.Provider>;
}
