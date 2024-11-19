import MainLayout from '@layouts/main-layout';
import ErrorPage from '@pages/error/error-page';
import { Home } from '@pages/home';
import Login from '@pages/auth/login';
import Notifications from '@pages/notifications/notifications';
import { PostDetail } from '@pages/post-detail';
import { paths } from '@routers/path';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Profile } from '@pages/profile';
import { Bookmarks } from '@pages/bookmarks';
import Register from '@pages/auth/register';
import { EditProfile } from '@pages/edit-profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.register} element={<Register />} />

      <Route path={paths.home} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={paths.notifications} element={<Notifications />} />
        <Route path={paths.postDetail} element={<PostDetail />} />
        <Route path={paths.profile} element={<Profile />} />
        <Route path={paths.profileDetail} element={<EditProfile />} />
        <Route path={`${paths.bookmarks}/*`} element={<Bookmarks />} />
      </Route>
    </Route>,
  ),
);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
