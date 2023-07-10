import { Card, TextInput, Button } from '@tremor/react';
import { Link } from 'react-router-dom';

export const Login = () => {
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
          <TextInput type='text' id='username' placeholder='ex. mike93' />
        </div>
        <div className='input-group flex flex-col gap-2'>
          <label className='' htmlFor='password'>
            Password
          </label>
          <TextInput
            type='password'
            id='password'
            placeholder='your passoword'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Button className='btn btn-primary'>Login</Button>
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
    </div>
  );
};
