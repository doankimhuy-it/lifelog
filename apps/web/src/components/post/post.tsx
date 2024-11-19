import { IBlog } from '@/interfaces/post';
import { Avatar } from '@components/avatar';
import { MoreOptions } from '@components/more-options';
import { Typography } from '@components/typography';
import {
  BookmarkSimple,
  ChatCircle,
  DotsThree,
  Heart,
  ShareFat,
} from '@phosphor-icons/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactItem } from './react-item';

interface BlogProps {
  blog: IBlog;
}

const Blog = ({ blog }: BlogProps) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const navigate = useNavigate();
  const [isMoreOptions, setIsMoreOptions] = React.useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleMoreOptions = () => {
    setIsMoreOptions(!isMoreOptions);
  };

  return (
    <div
      className="relative w-full flex flex-col rounded-[1.25rem] p-3 bg-reddish-2 gap-3 cursor-pointer"
      onClick={() => {
        navigate(`/posts/${blog.id}`);
      }}
    >
      <div className="flex items-start gap-5">
        <Avatar
          alt="avatar"
          src={
            blog.user?.avatar ||
            'https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg'
          }
          avtClassName="rounded-full min-w-[2.75rem] size-[2.75rem] object-cover"
        />
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-items-auto items-center">
            <Typography
              level="base-m"
              className="text-primary justify-self-start opacity-80 mr-4"
            >
              {blog.user?.name}
            </Typography>
            <Typography
              level="caption"
              className="text-tertiary justify-self-start grow opacity-45"
            >
              {blog.user?.time}
            </Typography>

            <DotsThree onClick={handleMoreOptions} />

            {isMoreOptions && <MoreOptions />}
          </div>
          <Typography level="body" className="text-secondary opacity-80">
            post.
          </Typography>

          {blog.content?.image && (
            <img
              src={blog.content.image}
              alt="post-image"
              loading="lazy"
              className="max-h-[20rem] md:max-h-[22.5rem] w-full rounded-[1.5rem] object-cover"
              onClick={() => {
                navigate(`/posts/${blog.id}`);
              }}
            />
          )}
        </div>
      </div>

      <div className="flex justify-end items-center md:justify-start md:pl-[48px]">
        <ReactItem
          value={blog.interactions?.likes || 0}
          icon={<Heart weight={isLiked ? 'fill' : 'regular'} />}
          onClick={handleLikeClick}
        />

        <ReactItem
          value={blog.interactions?.comments || 0}
          icon={<ChatCircle />}
        />

        <div className="flex items-center md:grow justify-end gap-4">
          <BookmarkSimple height={24} width={24} />
          <ShareFat height={24} width={24} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
