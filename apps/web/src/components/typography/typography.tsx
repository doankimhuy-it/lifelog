import { HTMLAttributes } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@lib/utils';
import { forwardRefWithAs } from '@utils/render';

const typographyVariants = tv({
  base: 'leading-snug',
  variants: {
    level: {
      'h2': 'font-medium text-[3rem]/[3.5rem] -tracking-[0.02rem]',
      'h3': 'font-medium text-[2.5rem]/[3rem] -tracking-[0.02rem]',
      'h4': 'font-medium text-[2rem]/[2.5rem] -tracking-[0.02rem]',
      'h5': 'font-medium text-[1.5rem]/[1.75rem] ',
      'hairline': 'font-medium text-[0.75rem]/[1.25rem] tracking-[0.05rem]',
      'body-b': 'font-bold text-[0.875rem]/[1.5rem]',
      'body-m': 'font-medium text-[0.875rem]/[1.5rem]',
      'body': 'font-normal text-[0.875rem]/[1.5rem]',
      'small-sb': 'font-semibold text-[0.625rem]/[0.75rem] ',
      'small': 'font-normal text-[0.625rem]/[0.75rem]',
      'caption': 'font-normal text-[0.75rem]/[1rem]',
      'caption-sb': 'font-semibold text-[0.75rem]/[1rem]',
      'base-sb': 'font-semibold text-[0.875rem]/[1.25rem]',
      'base-n': 'font-normal text-[0.875rem]/[1.25rem]',
      'base-m': 'font-medium text-[0.875rem]/[1.25rem]',
      'title': 'font-medium text-[1.25rem]/[1.5rem]',
    },
    color: {
      primary: 'text-neutral-black',
      secondary: 'text-neutral-white',
    },
  },
  defaultVariants: {
    level: 'body',
  },
});

const defaultVariantMapping: Record<
  NonNullable<VariantProps<typeof typographyVariants>['level']>,
  string
> = {
  'h2': 'h2',
  'h3': 'h3',
  'h4': 'h4',
  'h5': 'h5',
  'hairline': 'span',
  'body-b': 'span',
  'body-m': 'span',
  'body': 'span',
  'small-sb': 'span',
  'small': 'span',
  'caption': 'span',
  'caption-sb': 'span',
  'base-sb': 'span',
  'base-n': 'span',
  'base-m': 'span',
  'title': 'h1',
};

export interface TypographyProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof typographyVariants> {}

export const Typography = forwardRefWithAs<
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'b' | 'em' | 'div',
  TypographyProps
>((props, ref) => {
  const { level = 'body', color, children, as, className, ...rest } = props;

  const Tag = as ?? defaultVariantMapping[level ?? 'body'];

  return (
    <Tag
      ref={ref}
      className={cn(typographyVariants({ level, color }), className)}
      {...rest}
    >
      {children}
    </Tag>
  );
});
