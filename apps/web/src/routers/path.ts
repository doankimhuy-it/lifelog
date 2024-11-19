// ----------------------------------------------------------------------

const ROOTS = {
  HOME: '/',
  DASHBOARD: '/dashboard',
};

export const paths = {
  home: ROOTS.HOME,

  login: `${ROOTS.HOME}login`,
  register: `${ROOTS.HOME}/register`,

  postDetail: `${ROOTS.HOME}/posts/:id`,

  notifications: `${ROOTS.HOME}notifications`,

  bookmarks: `${ROOTS.HOME}/bookmarks`,

  profile: `${ROOTS.HOME}/users/:id`,
  profileDetail: `${ROOTS.HOME}/users/:id/edit`,

  settings: `${ROOTS.HOME}settings`,

  following: `${ROOTS.HOME}/following`,
};
