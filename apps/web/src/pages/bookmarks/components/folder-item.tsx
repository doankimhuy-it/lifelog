import { Typography } from '@components/typography';
import React from 'react';

interface FolderItemProps {
  icon: React.ReactNode;
  folderName: string;
  numberOfFiles: number;
  onClick?: () => void;
}

export default function FolderItem({
  icon,
  folderName,
  numberOfFiles,
  onClick,
}: FolderItemProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex items-center gap-4 bg-reddish-2 p-3 rounded-[1.25rem] group focus:bg-reddish-10"
    >
      <div className="rounded-[2.5rem] bg-reddish-5 p-2.5">{icon}</div>
      <Typography
        level="base-m"
        className="grow text-secondary after:contents-['20'] opacity-80 group-focus:text-primary"
      >
        {folderName}
      </Typography>
      <Typography level="base-n" className="text-primary opacity-50">
        {numberOfFiles}
      </Typography>
    </div>
  );
}
