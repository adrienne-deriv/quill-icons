import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedAppStoreIosXlIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M18.75 7.5c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v16.5a2.446 2.446 0 0 1-.656 1.594 2.446 2.446 0 0 1-1.594.656H2.25a2.446 2.446 0 0 1-1.594-.656A2.447 2.447 0 0 1 0 26.25V9.75c.031-.625.25-1.156.656-1.594A2.446 2.446 0 0 1 2.25 7.5zM5.953 24.047l.89-1.594c-.468-.594-1.077-.765-1.827-.515l-.703 1.171c-.22.5-.094.922.375 1.266.5.219.921.11 1.265-.328m6.516-2.531c.187-.438.172-.86-.047-1.266-.188-.375-.531-.578-1.031-.61H8.484l4.032-6.984c.25-.531.14-.953-.328-1.265-.532-.25-.97-.141-1.313.328l-.422.703-.375-.703c-.344-.469-.781-.578-1.312-.328-.47.312-.578.734-.328 1.265l.937 1.64-3.047 5.345h-2.39c-.563.03-.876.343-.938.937.063.563.375.875.938.938zm4.594 0c.562-.063.875-.375.937-.938-.062-.594-.375-.906-.937-.937h-2.438c-1-1.72-1.797-3.094-2.39-4.125a6.128 6.128 0 0 0-.376-.657c-.312.25-.53.657-.656 1.22-.156.593-.047 1.233.328 1.921.438.75.985 1.703 1.64 2.86.532.937 1.142 2 1.829 3.187.344.437.766.547 1.266.328.468-.344.593-.766.375-1.266l-.938-1.593z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreIosXlIcon);
export default ForwardRef;
