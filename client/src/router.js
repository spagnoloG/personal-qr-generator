import { Welcome } from './pages/Welcome';
import { Home } from './pages/Home';
import { List } from './pages/List';
import { Add } from './pages/Add';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';

export const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/add',
    component: Add
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    component: Welcome
  },
  {
    path: '*',
    component: NotFound
  }
]