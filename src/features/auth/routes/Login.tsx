import { Card, TextInput, Button } from '@tremor/react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useNotification } from '../../../hooks/useNotification';
import { CalloutNotification } from '../../../components/common/Notification';
import { useAuthAPI } from '../api/useAuth';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { notifications, addNotification, removeNotification } =
    useNotification();
  const { loginFn } = useAuthAPI();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!username) {
      return usernameRef.current?.focus();
    }
    if (!password) {
      return passwordRef.current?.focus();
    }
    loginFn.mutate(
      { username, password },
      {
        onSuccess: (data) => {
          console.log('onSuccess');
          console.log(data);
          Cookies.set('token', data.token);
          navigate('/');
        },
        onError: (error) => {
          console.log('onError');
          console.log(error);
          addNotification('Something went wrong, please try login again.');
        },
      }
    );
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <div className='max-w-[400px] mx-auto flex flex-col items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center justify-center mb-8'>
        <div className='text-2xl font-bold'>Login</div>
        <div className='text-sm'>Login to your account</div>
      </div>
      <Card className='flex flex-col gap-4'>
        <div className='input-group flex flex-col gap-2'>
          <label className='' htmlFor='username'>
            Username
          </label>
          <TextInput
            ref={usernameRef}
            type='text'
            id='username'
            placeholder='ex. mike93'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='input-group flex flex-col gap-2'>
          <label className='' htmlFor='password'>
            Password
          </label>
          <TextInput
            ref={passwordRef}
            type='password'
            id='password'
            placeholder='your passoword'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Button className='btn btn-primary' onClick={handleSubmit}>
            Login
          </Button>
          <div className='flex items-center justify-between'>
            <Link to='/auth/forgot-password' className='text-sm link'>
              Forgot password?
            </Link>
            <Link to='/auth/register' className='text-sm link'>
              Register
            </Link>
          </div>
        </div>
      </Card>

      <div className='flex flex-col items-center justify-center mb-8 fixed top-0 right-0 z-50 p-4'>
        {notifications.map((notification) => (
          <CalloutNotification
            key={notification.id}
            {...notification}
            handleCloseNotification={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </div>
  );
};
