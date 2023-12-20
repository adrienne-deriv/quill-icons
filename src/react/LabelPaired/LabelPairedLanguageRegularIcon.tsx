import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLanguageRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.5 7H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 8v8c0 .292.094.531.281.719A.974.974 0 0 0 2 17h7.5zm1 0v10H18a.974.974 0 0 0 .719-.281A.974.974 0 0 0 19 16V8a.974.974 0 0 0-.281-.719A.974.974 0 0 0 18 7zM20 8v8c-.02.563-.219 1.031-.594 1.406S18.563 17.98 18 18H2c-.562-.02-1.031-.219-1.406-.594S.02 16.563 0 16V8c.02-.562.219-1.031.594-1.406S1.438 6.02 2 6h16c.563.02 1.031.219 1.406.594S19.98 7.437 20 8M5.469 9.313l2 5c.083.291-.01.51-.282.656-.291.083-.51-.01-.656-.281L6.25 14h-2.5l-.281.688c-.146.27-.365.364-.656.28-.271-.145-.365-.364-.282-.655l2-5C4.635 9.104 4.791 9 5 9c.208 0 .365.104.469.313M5 10.843 4.125 13h1.75zM15.5 9.5v.5h2c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-.156l-.125.375a6.355 6.355 0 0 1-1.375 2.156l.312.188.594.344c.25.187.313.416.188.687-.188.25-.417.313-.688.188l-.594-.376a3.56 3.56 0 0 1-.594-.374c-.25.187-.52.354-.812.5l-.531.25c-.292.104-.51.03-.656-.22-.126-.29-.053-.51.218-.655l.531-.282c.167-.083.334-.177.5-.281l-.656-.656c-.187-.23-.187-.459 0-.688.23-.208.459-.208.688 0l.719.688.03.031a5.2 5.2 0 0 0 1.188-1.844V11H12.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h2v-.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageRegularIcon);
export default ForwardRef;
