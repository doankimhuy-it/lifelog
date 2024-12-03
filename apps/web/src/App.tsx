import { Route, Routes } from 'react-router-dom';
import { paths } from './constants/path';
import { MainLayout } from './layouts/main-layout';
import { ErrorPage } from './pages/error-page';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Profile } from './pages/profile/profile';
import { Register } from './pages/register';

export const App = () => (
  <Routes>
    <Route errorElement={<ErrorPage />}>
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.register} element={<Register />} />

      <Route path={paths.home} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={paths.notifications} />
        <Route path={paths.create} />
        <Route path={paths.bookmarks} />
        <Route path={paths.profile} element={<Profile />} />
      </Route>
    </Route>
  </Routes>
);
