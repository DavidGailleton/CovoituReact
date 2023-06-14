import { createContext, useState } from 'react';

export const UserContext = createContext(undefined);
export const UserDispatchContext = createContext(undefined);
export function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState(undefined);

  return <UserContext.Provider value={userDetails}>{children}</UserContext.Provider>;
}
