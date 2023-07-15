import {
  Dashboard,
  Decks,
  Flashcards,
  Proflle,
} from '../features/dashboard/routes';

export const dashboardRoutes = [
  {
    path: '/',
    component: Dashboard,
    exact: true,
    label: 'Dashboard',
  },
  {
    path: '/decks',
    component: Decks,
    exact: true,
    label: 'Decks',
  },
  {
    path: '/flashcards',
    component: Flashcards,
    exact: true,
    label: 'Flashcards',
  },
  {
    path: '/profile',
    component: Proflle,
    exact: true,
    label: 'Profile',
  },
];
