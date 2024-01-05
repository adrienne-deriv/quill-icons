import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedAppleXlIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M14.953 18.61c-.062.187.047.75.328 1.687.281.969 1.125 1.844 2.531 2.625-.187.594-.515 1.328-.984 2.203a11.156 11.156 0 0 1-1.687 2.297c-.657.656-1.36 1.015-2.11 1.078a4.199 4.199 0 0 1-1.687-.422c-.531-.25-1.172-.39-1.922-.422-.781.032-1.453.188-2.016.469-.5.219-1 .344-1.5.375-.781-.031-1.515-.406-2.203-1.125a11.643 11.643 0 0 1-1.781-2.437c-.5-.938-.86-1.704-1.078-2.297-.438-1.313-.656-2.578-.656-3.797.062-2.094.64-3.657 1.734-4.688 1.062-1.031 2.281-1.562 3.656-1.594.781.063 1.547.25 2.297.563.531.219.969.344 1.313.375.25-.031.624-.14 1.124-.328a18.47 18.47 0 0 1 1.407-.469 4.646 4.646 0 0 1 1.594-.187c1.75.156 3.078.859 3.984 2.109-1.594.938-2.375 2.266-2.344 3.984m-2.672-7.688c-.937 1.094-2.015 1.625-3.234 1.594-.063-1.313.328-2.438 1.172-3.375.406-.438.89-.813 1.453-1.125.594-.313 1.172-.485 1.734-.516.063.281.047.719-.047 1.313-.125.624-.484 1.328-1.078 2.109' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppleXlIcon);
export default ForwardRef;