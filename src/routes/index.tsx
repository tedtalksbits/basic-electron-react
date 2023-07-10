import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ForgotPw, Login, Register, ResetPw } from '../features/auth/routes';
import { NotFound } from '../components/common';

const RouteProtector = () => {
  const isAuthenticated = false;
  return <>{isAuthenticated ? <Outlet /> : <Navigate to='/auth/login' />}</>;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/register' element={<Register />} />
      <Route path='/auth/forgot-password' element={<ForgotPw />} />
      <Route path='/auth/reset-password' element={<ResetPw />} />
      <Route path='*' element={<NotFound />} />
      <Route element={<RouteProtector />}>
        <Route path='/' element={<div>hello protected route</div>} />
      </Route>
    </Routes>
  );
};
