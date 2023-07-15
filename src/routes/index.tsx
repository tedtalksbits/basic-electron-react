import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { NotFound, AppGrid } from '../components';
import { ForgotPw, Login, Register, ResetPw } from '../features/auth';
import { DashNavigation } from '../features/dashboard';
import { useAuthAPI } from '../features/auth/api/useAuth';
import { dashboardRoutes } from './dashboardRoutes';

const RouteProtector = () => {
  const { useWhoAmI } = useAuthAPI();
  const whoaAmIQuery = useWhoAmI();
  const { data, isLoading, isError } = whoaAmIQuery;
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <Navigate to='/' />}
      {data && (
        <AppGrid navigation={<DashNavigation routes={dashboardRoutes} />}>
          <Outlet />
        </AppGrid>
      )}
    </>
  );
};

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/forgot-password' element={<ForgotPw />} />
        <Route path='/auth/reset-password' element={<ResetPw />} />
        <Route path='*' element={<NotFound />} />
        <Route element={<RouteProtector />}>
          {dashboardRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};
