import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBadgeCheckMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.969 6.219v.031c-.146.208-.344.281-.594.219-.854-.23-1.625-.032-2.312.593-.626.688-.823 1.459-.594 2.313.062.25-.021.448-.25.594C1.448 10.385 1.042 11.063 1 12c.042.938.458 1.625 1.25 2.063.208.124.281.312.219.562-.23.854-.031 1.625.594 2.313.687.625 1.458.822 2.312.593.25-.062.448.021.594.25C6.385 18.552 7.062 18.958 8 19c.938-.042 1.625-.458 2.063-1.25.124-.208.312-.281.562-.219.854.23 1.625.032 2.313-.593.624-.688.822-1.459.593-2.313-.062-.25.021-.448.25-.594.771-.416 1.177-1.094 1.219-2.031-.042-.937-.458-1.615-1.25-2.031-.208-.146-.281-.344-.219-.594.23-.854.031-1.625-.594-2.312-.687-.625-1.458-.823-2.312-.594-.25.062-.448-.021-.594-.25C9.615 5.448 8.937 5.042 8 5c-.937.042-1.615.448-2.031 1.219M8 4c1.167.042 2.073.52 2.719 1.438 1.104-.188 2.083.114 2.937.906.792.854 1.094 1.833.906 2.937.917.646 1.396 1.552 1.438 2.719-.042 1.167-.52 2.073-1.437 2.719.187 1.104-.115 2.083-.907 2.937-.854.792-1.833 1.094-2.937.907C10.073 19.479 9.167 19.958 8 20c-1.167-.042-2.073-.52-2.719-1.437-1.104.187-2.083-.115-2.937-.907-.792-.854-1.094-1.833-.906-2.937C.52 14.073.042 13.167 0 12c.042-1.167.52-2.073 1.438-2.719-.188-1.104.114-2.083.906-2.937.854-.792 1.833-1.094 2.937-.907C5.927 4.522 6.833 4.043 8 4m3.344 6.344-4 4c-.23.208-.459.208-.688 0l-2-2c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0L7 13.281l3.656-3.625c.23-.208.459-.208.688 0 .208.23.208.459 0 .688'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckMdRegularIcon);
export default ForwardRef;
