import { Avatar } from '@components/avatar';
import { CircleButton } from '@components/button';
import { ComposerInput } from '@components/composer-input';
import SearchBar from '@components/search-bar/search-bar';
import MobileSidebarTrigger from '@components/sidebar-trigger/mobile-sidebar-trigger';
import { Hexagon, MagnifyingGlass, Plus } from '@phosphor-icons/react';
import eventBus from '@utils/event-emitter';
import React from 'react';
import CreatPost from './creat-post';

export default function Home() {
  const [isPostShow, setIsPostShow] = React.useState(false);
  const [isSidebarShow, setIsSidebarShow] = React.useState(false);

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isPostShow) {
        setIsPostShow(false);
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isPostShow]);

  const toggleCreatePost = () => {
    setIsPostShow(!isPostShow);
    eventBus.emit('isShowCreatePost', !isPostShow);
  };

  const toggleSidebar = () => {
    setIsSidebarShow(!isSidebarShow);
    eventBus.emit('isShowSidebar', !isSidebarShow);
  };

  return (
    <>
      <div className="grow w-full flex flex-col gap-2 items-center py-2 px-3 pb-[6rem] md:pb-0">
        <div className="md:hidden w-full h-[2.75rem] flex justify-between">
          <Hexagon />
          <div className="flex items-center gap-2">
            <CircleButton
              onClick={toggleCreatePost}
              className="size-[2.75rem]"
              children={<Plus />}
            />
            <CircleButton
              className="size-[2.75rem]"
              children={<MagnifyingGlass />}
            />

            <MobileSidebarTrigger onClick={toggleSidebar}>
              <Avatar
                src={'/img/avatar-7.png'}
                alt={'kohaku'}
                isOnline={true}
              />
            </MobileSidebarTrigger>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 mb-3">
          <CircleButton
            className="hidden md:block size-[44px] cursor-pointer"
            children={<Plus />}
            onClick={toggleCreatePost}
          />
          <SearchBar />
        </div>

        <ComposerInput usedBy="post" />
      </div>
      {isPostShow && <CreatPost onBack={toggleCreatePost} />}
    </>
  );
}
