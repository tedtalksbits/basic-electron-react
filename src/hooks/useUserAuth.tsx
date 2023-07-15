import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { User } from '../types/user';
import { api } from '../libs/axios';
import Cookies from 'js-cookie';
export const useAuth = () => {
  const [user, setUser] = useState<User | unknown>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getMe = useCallback(async () => {
    console.log('getMe');
    setIsLoading(true);
    try {
      const response = await api.post('/auth/me', {
        token: Cookies.get('token'),
      });
      console.log(response);
      if (response.status === 200) {
        console.log('setIsAuthenticated');
        setIsAuthenticated(true);
        console.log(isAuthenticated);
        console.log('setUser');
        setUser(response.data);
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    console.log('getMe end');
    console.log('isAuthenticated', isAuthenticated);
  }, [isAuthenticated, user]);

  useEffect(() => {
    getMe();
  }, [getMe]);

  return { user, isLoading, isAuthenticated };
};
