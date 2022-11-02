import { useContext } from 'react';

import { AuthContext, AuthContextDataProps } from '../components/contexts/AuthContext';

export function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContext);

  return context
}