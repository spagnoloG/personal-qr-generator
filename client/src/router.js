
import {Welcome} from './pages/Welcome';
import {Home} from './pages/Home';
import {List} from './pages/List';
import { Add } from './pages/Add';
import {Profile } from './pages/Profile';

export const routes = [
  {
      path: '/home',
      component: Home
  },
  {
    path: '/list',
    component: List
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
]