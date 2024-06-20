import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 6c0-1.094.875-2 2-2h5v4c0 .563.438 1 1 1h4v9c0 1.125-.906 2-2 2H6.906c.063-.156.094-.312.094-.5V17c.031 0 .063-.031.094-.031.218-.094.468-.25.656-.5a1.57 1.57 0 0 0 .344-.844c.031-.094.031-.156.031-.219.063-.031.094-.062.188-.125.624-.5.843-1.312.562-2.062q-.093-.14-.094-.188c0-.062.031-.125.094-.219a1.81 1.81 0 0 0-.562-2.062c-.094-.062-.126-.094-.188-.125 0-.062 0-.125-.031-.219a1.725 1.725 0 0 0-1.5-1.5c-.094-.031-.157-.031-.219-.031-.031-.031-.062-.094-.125-.187a1.74 1.74 0 0 0-2.062-.532c-.063.031-.157.063-.188.094zm12 2h-4V4zM3.406 9.063l.5.187c.031.031.125.031.188 0l.468-.187a.82.82 0 0 1 .907.218l.312.438a.17.17 0 0 0 .157.094l.53.062a.8.8 0 0 1 .657.656l.063.531c0 .063.03.126.093.157l.407.312a.74.74 0 0 1 .25.875l-.188.5a.27.27 0 0 0 0 .219l.188.469c.125.312.03.687-.22.875l-.437.344a.17.17 0 0 0-.093.156l-.063.531a.8.8 0 0 1-.656.656L6 16.22V19.5a.58.58 0 0 1-.281.469.57.57 0 0 1-.5-.032L4 19.126l-1.25.813c-.125.093-.344.093-.5.03A.55.55 0 0 1 2 19.5v-3.281l-.5-.063c-.344-.062-.594-.312-.625-.656l-.094-.531a.17.17 0 0 0-.094-.156l-.406-.344c-.281-.188-.375-.563-.25-.875l.219-.5v-.188l-.219-.469c-.125-.312-.031-.687.25-.874l.407-.344a.17.17 0 0 0 .093-.156l.063-.532a.8.8 0 0 1 .656-.656l.531-.062a.17.17 0 0 0 .156-.094l.344-.406c.188-.282.563-.376.875-.25M6 13c0-.687-.406-1.344-1-1.719-.625-.344-1.406-.344-2 0A2.02 2.02 0 0 0 2 13c0 .719.375 1.375 1 1.75.594.344 1.375.344 2 0 .594-.375 1-1.031 1-1.75' />
    </g>
    <defs>
      <clipPath id='11ce6f15f43658b6cd289f5dacf726df__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateMdFillIcon);
export default ForwardRef;
