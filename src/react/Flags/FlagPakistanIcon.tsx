import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagPakistanIcon = (
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
    <g fillRule='evenodd' clipRule='evenodd'>
      <path fill='#fff' d='M0 1.994C0 .893.902 0 2.009 0H6v16H2.009A2 2 0 0 1 0 14.006z' />
      <path
        fill='#01411C'
        d='M21.992 16H6V0h15.991C23.098 0 24 .893 24 1.994v12.012c0 1.1-.9 1.994-2.009 1.994m-2.8-8q0-.27-.03-.532a3.5 3.5 0 1 1-3.938-3.938A4.5 4.5 0 1 0 19.192 8m-1.73.19.708-1.502 1.637-.266L18.6 5.284l.253-1.643-1.455.8-1.484-.748.31 1.632-1.17 1.178 1.646.211z'
      />
      <path
        fill='#fff'
        d='M18.17 6.688 17.46 8.19 16.7 6.714l-1.647-.211 1.17-1.178-.31-1.632 1.484.748 1.455-.8-.253 1.643 1.209 1.138'
      />
      <path
        fill='#fff'
        d='M19.162 7.468q.03.262.03.532a4.5 4.5 0 1 1-3.968-4.47 3.5 3.5 0 1 0 3.938 3.938'
      />
      <path
        fill='#000'
        fillOpacity={0.08}
        d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(FlagPakistanIcon);
export default ForwardRef;
