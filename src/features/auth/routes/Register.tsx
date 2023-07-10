import { TextInput, Card, Button } from '@tremor/react';
import { Link } from 'react-router-dom';
export const Register = () => {
  return (
    <div className='max-w-[400px] mx-auto flex flex-col items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center justify-center mb-8'>
        <div className='text-2xl font-bold'>Register</div>
        <div className='text-sm'>Create your account</div>
      </div>
      <Card className='flex flex-col gap-4'>
        <div className='input-group flex flex-col gap-2'>
          <label className='' htmlFor='name'>
            Name
          </label>
          <TextInput type='text' id='name' placeholder='' />
        </div>
        <div className='input-group flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <div className='input-group flex flex-col gap-2'>
              <label className='' htmlFor='username'>
                Username
              </label>
              <TextInput type='text' id='username' placeholder='' />
            </div>
            <div className='input-group flex flex-col gap-2'>
              <label className='' htmlFor='email'>
                Email
              </label>
              <TextInput type='text' id='email' placeholder='' />
            </div>
          </div>
        </div>
        <div className='input-group flex flex-col gap-2'>
          <label className='' htmlFor='password'>
            Password
          </label>
          <TextInput type='password' id='password' placeholder='' />
        </div>

        <div className='flex flex-col gap-2'>
          <Button className='btn btn-primary'>Register</Button>
          <div className='flex items-center justify-between mt-2'>
            <span className='text-sm'>
              Already have an account?{' '}
              <Link to='/auth/login' className='link'>
                Login
              </Link>
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};
