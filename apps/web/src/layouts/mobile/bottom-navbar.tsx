import { Bell, Bookmark, Home, Plus, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button';
import { paths } from '../../constants/path';

export const BottomNavbar = () => {
  return (
    <div className="fixed z-10 left-1/2 -translate-x-1/2 w-full h-16 max-w-lg bg-background dark:bg-background border border-border overflow-hidden rounded-full bottom-4 dark:border-border">
      <div className="grid h-full grid-cols-5 mx-auto">
        <Link to="/">
          <Button
            variant="ghost"
            className="flex-col items-center justify-center h-full w-full"
          >
            <Home size={30} />
            <span className="sr-only">Home</span>
          </Button>
        </Link>

        <Link to={paths.notifications}>
          <Button
            variant="ghost"
            className="flex-col items-center justify-center h-full w-full"
          >
            <Bell size={30} />
            <span className="sr-only">Notifications</span>
          </Button>
        </Link>

        <Link to={paths.create} className="flex items-center justify-center">
          <Button className="flex-col items-center justify-center p-0 aspect-square h-full rounded-full">
            <Plus size={36} />
            <span className="sr-only">Create blog</span>
          </Button>
        </Link>

        <Link to={paths.bookmarks}>
          <Button
            variant="ghost"
            className="flex-col items-center justify-center h-full w-full"
          >
            <Bookmark size={30} />
            <span className="sr-only">Bookmarks</span>
          </Button>
        </Link>

        <Link to={paths.profile}>
          <Button
            variant="ghost"
            className="flex-col items-center justify-center h-full w-full"
          >
            <UserCircle size={30} />
            <span className="sr-only">Profile</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
