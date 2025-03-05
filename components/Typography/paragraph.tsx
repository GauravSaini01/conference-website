import React, { ReactNode } from 'react';

type ParagraphProps = {
  typeStyle?: 'body-lg' | 'body-md' | 'body-sm';
  textColor?: string;
  fontWeight?: string;
  className?: string;
  children: ReactNode;
};

export default function Paragraph({
  typeStyle = 'body-lg',
  textColor = 'text-gray-400',
  fontWeight = '',
  className = '',
  children,
}: ParagraphProps) {
  let classNames = '';

  switch (typeStyle) {
    case 'body-lg':
      classNames = `text-[20px] sm:text-[16px] ${fontWeight} ${className}`;
      break;
    case 'body-md':
      classNames = `text-md ${fontWeight} ${className}`;
      break;
    case 'body-sm':
      classNames = `text-sm ${fontWeight} ${className}`;
      break;
    default:
      classNames = `text-lg font-regular ${className}`;
  }

  return <p className={`${textColor} ${classNames}`}>{children}</p>;
}
