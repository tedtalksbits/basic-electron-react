import { Link, NavLink } from 'react-router-dom';
import { DashboardRoutes } from '../types';
import { Text } from '@tremor/react';
type DashNavigationProps = {
  routes: DashboardRoutes[];
};
export const DashNavigation = ({ routes }: DashNavigationProps) => {
  return (
    <nav className='md:flex-col md:flex border-r w-[284px] hidden md:shrink-0 min-h-screen overflow-y-hidden'>
      <ul className='flex flex-col overflow-y-scroll relative p-8' id='dashnav'>
        <div className='mb-6 sticky top-2 py-4'>
          <h1>
            <Link to='/'>Logo</Link>
          </h1>
        </div>
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              className={({ isActive }) => `${isActive && 'active'} nav-link`}
              to={route.path}
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
