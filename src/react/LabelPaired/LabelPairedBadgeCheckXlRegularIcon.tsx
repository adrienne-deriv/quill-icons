import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBadgeCheckXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.953 9.328v.047c-.219.313-.515.422-.89.328-1.282-.344-2.438-.047-3.47.89-.937 1.032-1.234 2.188-.89 3.47.094.374-.031.671-.375.89-1.156.625-1.765 1.64-1.828 3.047.063 1.406.688 2.438 1.875 3.094.313.187.422.468.328.843-.344 1.282-.047 2.438.89 3.47 1.032.937 2.188 1.234 3.47.89.374-.094.671.031.89.375.625 1.156 1.64 1.765 3.047 1.828 1.406-.062 2.438-.687 3.094-1.875.187-.312.469-.422.844-.328 1.28.344 2.437.047 3.468-.89.938-1.032 1.235-2.188.89-3.47-.093-.375.032-.671.376-.89 1.156-.625 1.765-1.64 1.828-3.047-.062-1.406-.687-2.422-1.875-3.047-.312-.219-.422-.515-.328-.89.344-1.282.047-2.438-.89-3.47-1.032-.937-2.188-1.234-3.47-.89-.374.094-.671-.031-.89-.375C14.422 8.172 13.407 7.563 12 7.5c-1.406.063-2.422.672-3.047 1.828M12 6c1.75.063 3.11.781 4.078 2.156 1.656-.281 3.125.172 4.406 1.36 1.188 1.28 1.641 2.75 1.36 4.406C23.219 14.89 23.937 16.25 24 18c-.062 1.75-.781 3.11-2.156 4.078.281 1.656-.172 3.125-1.36 4.406-1.28 1.188-2.75 1.641-4.406 1.36C15.11 29.219 13.75 29.937 12 30c-1.75-.062-3.11-.781-4.078-2.156-1.656.281-3.125-.172-4.406-1.36-1.188-1.28-1.641-2.75-1.36-4.406C.781 21.11.063 19.75 0 18c.063-1.75.781-3.11 2.156-4.078-.281-1.656.172-3.125 1.36-4.406 1.28-1.188 2.75-1.641 4.406-1.36C8.89 6.781 10.25 6.062 12 6m5.016 9.516-6 6c-.344.312-.688.312-1.032 0l-3-3c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l2.484 2.438 5.484-5.438c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckXlRegularIcon);
export default ForwardRef;
