import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridSmBoldIcon = (
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
      <path d='M2.781 5.719H1.47V7.03H2.78zM1.47 4.625H2.78q.465 0 .766.328.328.3.328.766V7.03q0 .465-.328.766a1 1 0 0 1-.766.328H1.47a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766V5.72q0-.465.328-.766a1 1 0 0 1 .766-.328m1.312 5.469H1.47v1.312H2.78zM1.47 9H2.78q.465 0 .766.328.328.3.328.766v1.312q0 .465-.328.766a1 1 0 0 1-.766.328H1.47a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766v-1.312q0-.465.328-.766A1 1 0 0 1 1.47 9m0 5.469v1.312H2.78V14.47zm-1.094 0q0-.465.328-.766a1 1 0 0 1 .766-.328H2.78q.465 0 .766.328.328.3.328.766v1.312q0 .465-.328.766a1 1 0 0 1-.766.328H1.47a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766zm6.781-8.75H5.844V7.03h1.312zM5.844 4.625h1.312q.465 0 .766.328.328.3.328.766V7.03q0 .465-.328.766a1 1 0 0 1-.766.328H5.844a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766V5.72q0-.465.328-.766a1 1 0 0 1 .766-.328m0 5.469v1.312h1.312v-1.312zm-1.094 0q0-.465.328-.766A1 1 0 0 1 5.844 9h1.312q.465 0 .766.328.328.3.328.766v1.312q0 .465-.328.766a1 1 0 0 1-.766.328H5.844a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766zm2.406 4.375H5.844v1.312h1.312zm-1.312-1.094h1.312q.465 0 .766.328.328.3.328.766v1.312q0 .465-.328.766a1 1 0 0 1-.766.328H5.844a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766V14.47q0-.465.328-.766a1 1 0 0 1 .766-.328m4.375-7.656V7.03h1.312V5.72zm-1.094 0q0-.465.328-.766a1 1 0 0 1 .766-.328h1.312q.465 0 .766.328.328.3.328.766V7.03q0 .465-.328.766a1 1 0 0 1-.766.328H10.22a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766zm2.406 4.375H10.22v1.312h1.312zM10.22 9h1.312q.465 0 .766.328.328.3.328.766v1.312q0 .465-.328.766a1 1 0 0 1-.766.328H10.22a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766v-1.312q0-.465.328-.766A1 1 0 0 1 10.22 9m0 5.469v1.312h1.312V14.47zm-1.094 0q0-.465.328-.766a1 1 0 0 1 .766-.328h1.312q.465 0 .766.328.328.3.328.766v1.312q0 .465-.328.766a1 1 0 0 1-.766.328H10.22a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766z' />
    </g>
    <defs>
      <clipPath id='0b43a9fa4f7a1cc53f0029f519eea69f__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridSmBoldIcon);
export default ForwardRef;
