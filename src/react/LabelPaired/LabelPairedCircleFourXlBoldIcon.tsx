import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleFourXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M21.75 18c0-1.781-.437-3.406-1.312-4.875-.844-1.469-2.032-2.656-3.563-3.562C15.344 8.687 13.719 8.25 12 8.25c-1.719 0-3.344.438-4.875 1.313-1.531.906-2.719 2.093-3.562 3.562C2.687 14.594 2.25 16.219 2.25 18c0 1.781.438 3.406 1.313 4.875.843 1.469 2.03 2.656 3.562 3.563 1.531.875 3.156 1.312 4.875 1.312 1.719 0 3.344-.437 4.875-1.312 1.531-.907 2.719-2.094 3.563-3.563.875-1.469 1.312-3.094 1.312-4.875M0 18c.031-2.187.563-4.187 1.594-6C2.656 10.188 4.125 8.719 6 7.594 7.906 6.53 9.906 6 12 6s4.094.531 6 1.594c1.875 1.125 3.344 2.593 4.406 4.406 1.032 1.813 1.563 3.813 1.594 6-.031 2.188-.562 4.188-1.594 6-1.062 1.813-2.531 3.281-4.406 4.406C16.094 29.47 14.094 30 12 30s-4.094-.531-6-1.594C4.125 27.281 2.656 25.813 1.594 24 .563 22.188.03 20.188 0 18m10.5-5.953c.625.281.86.765.703 1.453l-1.781 5.25h3.328v-2.625c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125v2.625h.375c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H15v1.875c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V21H7.875c-.375 0-.672-.156-.89-.469a1.209 1.209 0 0 1-.188-1.031l2.25-6.75c.281-.625.765-.86 1.453-.703'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourXlBoldIcon);
export default ForwardRef;
