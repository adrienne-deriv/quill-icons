import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.688 8.313H1.812v1.874h1.876zM1.812 6.75h1.876q.664 0 1.093.469.47.429.469 1.093v1.876q0 .663-.469 1.093a1.42 1.42 0 0 1-1.093.469H1.812q-.663 0-1.093-.469a1.42 1.42 0 0 1-.469-1.094V8.314q0-.665.469-1.094a1.42 1.42 0 0 1 1.094-.469m1.876 7.813H1.812v1.874h1.876zM1.812 13h1.876q.664 0 1.093.469.47.428.469 1.094v1.874q0 .665-.469 1.094A1.42 1.42 0 0 1 3.688 18H1.812q-.663 0-1.093-.469a1.42 1.42 0 0 1-.469-1.093v-1.875q0-.665.469-1.094A1.42 1.42 0 0 1 1.813 13m0 7.813v1.875h1.876v-1.875zm-1.562 0q0-.665.469-1.094a1.42 1.42 0 0 1 1.094-.469h1.875q.664 0 1.093.469.47.429.469 1.093v1.875q0 .665-.469 1.094a1.42 1.42 0 0 1-1.093.469H1.812q-.663 0-1.093-.469a1.42 1.42 0 0 1-.469-1.093zm9.688-12.5H8.062v1.874h1.876zM8.062 6.75h1.876q.663 0 1.093.469.47.429.469 1.093v1.876q0 .663-.469 1.093a1.42 1.42 0 0 1-1.094.469H8.063q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.094V8.314q0-.665.469-1.094a1.42 1.42 0 0 1 1.093-.469m0 7.813v1.874h1.876v-1.875zm-1.562 0q0-.665.469-1.094A1.42 1.42 0 0 1 8.062 13h1.876q.663 0 1.093.469.47.428.469 1.094v1.874q0 .665-.469 1.094A1.42 1.42 0 0 1 9.937 18H8.063q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093zm3.438 6.25H8.062v1.875h1.876zM8.062 19.25h1.876q.663 0 1.093.469.47.429.469 1.093v1.875q0 .665-.469 1.094a1.42 1.42 0 0 1-1.094.469H8.063q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093v-1.875q0-.665.469-1.094a1.42 1.42 0 0 1 1.093-.469m6.25-10.937v1.874h1.876V8.314zm-1.562 0q0-.665.469-1.094a1.42 1.42 0 0 1 1.094-.469h1.874q.665 0 1.094.469.47.429.469 1.093v1.876q0 .663-.469 1.093a1.42 1.42 0 0 1-1.093.469h-1.875q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.094zm3.438 6.25h-1.875v1.874h1.874zM14.313 13h1.874q.665 0 1.094.469.47.428.469 1.094v1.874q0 .665-.469 1.094a1.42 1.42 0 0 1-1.093.469h-1.875q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093v-1.875q0-.665.469-1.094A1.42 1.42 0 0 1 14.313 13m0 7.813v1.875h1.874v-1.875zm-1.563 0q0-.665.469-1.094a1.42 1.42 0 0 1 1.094-.469h1.874q.665 0 1.094.469.47.429.469 1.093v1.875q0 .665-.469 1.094a1.42 1.42 0 0 1-1.093.469h-1.875q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093z' />
    </g>
    <defs>
      <clipPath id='b881b0ed5b6f22a787224bf2f8edd3e4__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridLgBoldIcon);
export default ForwardRef;
