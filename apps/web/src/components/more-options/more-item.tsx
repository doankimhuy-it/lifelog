import { Typography } from '@components/typography';

interface MoreItemProps {
  title: string;
  icon: React.ReactNode;
}

export default function MoreItem({ title, icon }: MoreItemProps) {
  return (
    <button className="w-full flex items-center justify-between gap-2 px-3 py-2.5 hover:bg-reddish-10 rounded-[1rem] group">
      <Typography
        level="base-sb"
        className="text-tertiary group-hover:text-primary"
      >
        {title}
      </Typography>
      {icon}
    </button>
  );
}
