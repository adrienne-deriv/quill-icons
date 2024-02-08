import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.781 5.5H1.47q-.191.027-.219.219V7.03q.027.191.219.219H2.78q.191-.027.219-.219V5.72q-.027-.191-.219-.219M1.47 4.625H2.78q.465 0 .766.328.328.3.328.766V7.03q0 .465-.328.766a1 1 0 0 1-.766.328H1.47a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766V5.72q0-.465.328-.766a1 1 0 0 1 .766-.328m1.312 5.25H1.47q-.191.027-.219.219v1.312q.027.191.219.219H2.78q.191-.027.219-.219v-1.312q-.027-.191-.219-.219M1.47 9H2.78q.465 0 .766.328.328.3.328.766v1.312q0 .465-.328.766a1 1 0 0 1-.766.328H1.47a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766v-1.312q0-.465.328-.766A1 1 0 0 1 1.47 9m0 5.25q-.191.027-.219.219v1.312q.027.191.219.219H2.78q.191-.027.219-.219V14.47q-.027-.191-.219-.219zm-1.094.219q0-.465.328-.766a1 1 0 0 1 .766-.328H2.78q.465 0 .766.328.328.3.328.766v1.312q0 .465-.328.766a1 1 0 0 1-.766.328H1.47a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766zM7.156 5.5H5.844q-.191.027-.219.219V7.03q.027.191.219.219h1.312q.191-.027.219-.219V5.72q-.027-.191-.219-.219m-1.312-.875h1.312q.465 0 .766.328.328.3.328.766V7.03q0 .465-.328.766a1 1 0 0 1-.766.328H5.844a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766V5.72q0-.465.328-.766a1 1 0 0 1 .766-.328m0 5.25q-.191.027-.219.219v1.312q.027.191.219.219h1.312q.191-.027.219-.219v-1.312q-.027-.191-.219-.219zm-1.094.219q0-.465.328-.766A1 1 0 0 1 5.844 9h1.312q.465 0 .766.328.328.3.328.766v1.312q0 .465-.328.766a1 1 0 0 1-.766.328H5.844a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766zm2.406 4.156H5.844q-.191.027-.219.219v1.312q.027.191.219.219h1.312q.191-.027.219-.219V14.47q-.027-.191-.219-.219m-1.312-.875h1.312q.465 0 .766.328.328.3.328.766v1.312q0 .465-.328.766a1 1 0 0 1-.766.328H5.844a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766V14.47q0-.465.328-.766a1 1 0 0 1 .766-.328M10.219 5.5q-.191.027-.219.219V7.03q.027.191.219.219h1.312q.191-.027.219-.219V5.72q-.027-.191-.219-.219zm-1.094.219q0-.465.328-.766a1 1 0 0 1 .766-.328h1.312q.465 0 .766.328.328.3.328.766V7.03q0 .465-.328.766a1 1 0 0 1-.766.328H10.22a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766zm2.406 4.156H10.22q-.191.027-.219.219v1.312q.027.191.219.219h1.312q.191-.027.219-.219v-1.312q-.027-.191-.219-.219M10.22 9h1.312q.465 0 .766.328.328.3.328.766v1.312q0 .465-.328.766a1 1 0 0 1-.766.328H10.22a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766v-1.312q0-.465.328-.766A1 1 0 0 1 10.22 9m0 5.25q-.191.027-.219.219v1.312q.027.191.219.219h1.312q.191-.027.219-.219V14.47q-.027-.191-.219-.219zm-1.094.219q0-.465.328-.766a1 1 0 0 1 .766-.328h1.312q.465 0 .766.328.328.3.328.766v1.312q0 .465-.328.766a1 1 0 0 1-.766.328H10.22a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766z' />
    </g>
    <defs>
      <clipPath id='816c46ae35dd5df75c278a241f341d4a__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridSmRegularIcon);
export default ForwardRef;
