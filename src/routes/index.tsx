import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const RouteProtector = () => {
  const isAuthenticated = false;
  return <>{isAuthenticated ? <Outlet /> : <Navigate to='/auth/login' />}</>;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/auth/login' element={<div>login</div>} />
      <Route path='/auth/register' element={<div>register</div>} />
      <Route
        path='/auth/forgot-password'
        element={<div>forgot password</div>}
      />
      <Route path='/auth/reset-password' element={<div>reset password</div>} />
      <Route path='/auth/verify-email' element={<div>verify email</div>} />
      <Route path='/auth/verify-phone' element={<div>verify phone</div>} />
      <Route path='*' element={<div>404</div>} />
      <Route element={<RouteProtector />}>
        <Route path='/' element={<div>hello protected route</div>} />
      </Route>
    </Routes>
  );
};
