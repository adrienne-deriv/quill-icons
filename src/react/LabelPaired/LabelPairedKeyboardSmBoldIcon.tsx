import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 6.813q-.41.027-.437.437v7q.027.41.437.438h12.25q.41-.028.438-.438v-7q-.028-.41-.438-.437zm-1.75.437q.027-.738.52-1.23.492-.493 1.23-.52h12.25q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52H1.875q-.738-.027-1.23-.52-.493-.492-.52-1.23zm4.813 5.25h6.125q.41.027.437.438v.437q-.027.41-.437.438H4.937q-.41-.028-.437-.438v-.437q.027-.411.438-.438m-1.97-1.969q.029-.41.438-.437h.438q.41.027.437.437v.438q-.027.41-.437.437h-.438q-.41-.027-.437-.437zm.438-2.625h.438q.41.027.437.438v.437q-.027.411-.437.438h-.438q-.41-.027-.437-.438v-.437q.027-.411.437-.438m1.75 2.625q.027-.41.438-.437h.437q.411.027.438.437v.438q-.027.41-.438.437h-.437q-.411-.027-.438-.437zm.438-2.625h.437q.411.027.438.438v.437q-.027.411-.438.438h-.437q-.411-.027-.438-.438v-.437q.027-.411.438-.438m1.75 2.625q.027-.41.437-.437h.438q.41.027.437.437v.438q-.027.41-.437.437H7.78q-.41-.027-.437-.437zm.437-2.625h.438q.41.027.437.438v.437q-.027.411-.437.438H7.78q-.41-.027-.437-.438v-.437q.027-.411.437-.438m1.75 2.625q.027-.41.438-.437h.437q.411.027.438.437v.438q-.027.41-.438.437H9.97q-.411-.027-.438-.437zm.438-2.625h.437q.411.027.438.438v.437q-.027.411-.438.438H9.97q-.411-.027-.438-.438v-.437q.027-.411.438-.438m1.75 2.625q.027-.41.437-.437h.438q.41.027.437.437v.438q-.027.41-.437.437h-.438q-.41-.027-.437-.437zm.437-2.625h.438q.41.027.437.438v.437q-.027.411-.437.438h-.438q-.41-.027-.437-.438v-.437q.027-.411.437-.438' />
    </g>
    <defs>
      <clipPath id='9f61b7f8446922413779c5069d6af608__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardSmBoldIcon);
export default ForwardRef;
