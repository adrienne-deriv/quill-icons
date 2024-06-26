import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagMongoliaIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#C62429' d='M16 0h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6z' />
    <path fill='#004F99' d='M16 0H8v16h8z' />
    <path fill='#C62429' d='M4.5 9a1 1 0 0 0 1-1v3a1 1 0 1 0-2 0V8a1 1 0 0 0 1 1' />
    <path
      fill='#C62429'
      fillRule='evenodd'
      d='M8 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6zM5.5 6l-1-2-1 2zm-2 5a1 1 0 1 0 2 0v1h1V8h-1a1 1 0 0 0-2 0h-1v4h1z'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path fill='#FAD000' fillRule='evenodd' d='M2.5 8h1v4h-1zm3 0h1v4h-1z' clipRule='evenodd' />
    <path
      fill='#FAD000'
      d='M4.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2'
    />
    <path fill='#FAD000' fillRule='evenodd' d='m4.5 4 1 2h-2z' clipRule='evenodd' />
  </svg>
);
const ForwardRef = forwardRef(FlagMongoliaIcon);
export default ForwardRef;
