import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUbuntuXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21.984 9.516c0 1.312-.703 2.437-1.78 3.093a3.7 3.7 0 0 1-3.563 0c-1.078-.656-1.782-1.78-1.782-3.093 0-1.266.704-2.438 1.782-3.047a3.47 3.47 0 0 1 3.562 0 3.53 3.53 0 0 1 1.781 3.047M7.22 17.296c0 1.267-.703 2.438-1.782 3.095C4.36 21 3 21 1.876 20.39a3.62 3.62 0 0 1-1.734-3.094c0-1.266.656-2.438 1.734-3.047 1.125-.656 2.484-.656 3.563 0a3.53 3.53 0 0 1 1.78 3.047M2.672 22.22h-.047a4.97 4.97 0 0 0 3.188-.375c.562 1.172 1.406 2.156 2.39 2.953 1.031.75 2.203 1.312 3.469 1.594.281.047.61.093.89.14.047 1.125.422 2.203 1.126 3.047-2.391.047-4.688-.61-6.657-1.922-1.968-1.36-3.515-3.234-4.36-5.437m18.516 4.218c0 1.266-.704 2.438-1.782 3.094a3.7 3.7 0 0 1-3.562 0c-1.078-.656-1.781-1.828-1.781-3.093 0-1.266.703-2.438 1.78-3.047a3.47 3.47 0 0 1 3.563 0 3.53 3.53 0 0 1 1.782 3.047m-.375-3.937h-.047c.843-1.312 1.265-2.766 1.312-4.312.047-1.5-.281-3-.984-4.36.89-.562 1.64-1.406 2.015-2.39a11.6 11.6 0 0 1 2.016 6.984c-.14 2.484-1.031 4.875-2.578 6.797a5.26 5.26 0 0 0-1.735-2.719M4.733 12.375c-.375-.094-.703-.094-1.078-.094h-.375a11.75 11.75 0 0 1 4.735-4.594 11.48 11.48 0 0 1 6.468-1.359c-.515.61-.89 1.36-1.03 2.156-.048.282-.095.563-.095.797-1.406.047-2.765.375-3.937 1.031-1.219.657-2.297 1.594-3.047 2.72-.516-.329-1.078-.516-1.64-.657' />
    </g>
    <defs>
      <clipPath id='65158ceb2c41331eb6ddc003267ed0bb__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUbuntuXlIcon);
export default ForwardRef;
