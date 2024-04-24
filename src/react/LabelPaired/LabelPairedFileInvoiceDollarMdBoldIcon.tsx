import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 18V9H8c-.562 0-1-.437-1-1V5.5H2c-.281 0-.5.25-.5.5v12c0 .281.219.5.5.5h8c.25 0 .5-.219.5-.5M0 6c0-1.094.875-2 2-2h5.156c.532 0 1.032.219 1.407.594l2.843 2.843c.375.375.594.875.594 1.407V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm6 4.75c.344 0 .625.281.625.625v.313c.219.03.438.093.625.124.344.094.563.438.469.75a.6.6 0 0 1-.75.47c-.344-.063-.688-.126-1-.126-.25-.031-.5.031-.688.125-.156.094-.156.156-.156.188 0 .031.031.062.125.125.188.094.5.187.906.281.344.094.813.219 1.157.438.375.218.78.593.78 1.218.032.656-.343 1.094-.78 1.313a2 2 0 0 1-.72.25v.312a.627.627 0 0 1-.624.625.627.627 0 0 1-.625-.625v-.343c-.313-.063-.594-.157-.844-.22-.062-.03-.125-.03-.187-.062a.625.625 0 0 1-.438-.781.597.597 0 0 1 .781-.406c.094 0 .157.031.219.062.438.125.781.219 1.125.219.281.031.531-.031.719-.125.125-.062.156-.125.156-.219 0 0 0-.062-.156-.156a5.3 5.3 0 0 0-.907-.281l-.03-.031c-.344-.094-.782-.22-1.126-.376-.375-.218-.781-.593-.781-1.218-.031-.656.406-1.063.813-1.281.218-.126.437-.188.687-.25v-.313c0-.344.281-.625.625-.625M3 7h2.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H3a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m0 2h2.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H3a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='540b36492d4c1a1bfbd48a969d404618__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarMdBoldIcon);
export default ForwardRef;
