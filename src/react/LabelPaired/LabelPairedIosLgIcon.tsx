import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedIosLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.008 15.813c0 1.796-.899 2.93-2.422 2.93-1.484 0-2.383-1.134-2.383-2.93s.899-2.93 2.383-2.93c1.523 0 2.422 1.133 2.422 2.93m9.492-4.805v9.023c0 .703-.04 1.836-.43 2.813-.195.508-.625 1.21-1.25 1.68-.39.273-.82.546-1.406.742-.664.195-1.445.234-2.422.234H7.97c-.977 0-1.758-.04-2.422-.234-.586-.196-1.016-.47-1.406-.743-.625-.468-1.055-1.171-1.25-1.68-.391-.976-.391-2.109-.391-2.812v-9.023c0-.703 0-1.836.39-2.813.196-.508.626-1.21 1.25-1.68.391-.312.82-.585 1.407-.742.664-.195 1.445-.273 2.422-.273h9.023c.977 0 1.758.078 2.422.273.586.196 1.016.47 1.406.743.625.468 1.055 1.172 1.25 1.68.39.976.43 2.109.43 2.812M6.445 19.445V15.11h-.898v4.336zm.04-5.547a.517.517 0 0 0-.508-.507.517.517 0 0 0-.508.507c0 .274.234.508.508.508a.517.517 0 0 0 .507-.508m7.46 1.915c0-2.305-1.289-3.75-3.36-3.75-2.03 0-3.32 1.445-3.32 3.75s1.29 3.75 3.32 3.75c2.071 0 3.36-1.446 3.36-3.75m5.82 1.562c0-1.016-.624-1.64-2.109-1.953l-.82-.195c-.977-.196-1.367-.586-1.367-1.172 0-.742.664-1.172 1.601-1.172.938 0 1.563.469 1.64 1.289h.9c-.04-1.25-1.094-2.11-2.54-2.11-1.484 0-2.539.86-2.539 2.032 0 1.054.625 1.719 2.07 2.031l.82.156c.977.235 1.407.625 1.407 1.25 0 .703-.742 1.211-1.719 1.211-1.015 0-1.757-.469-1.875-1.25h-.898c.078 1.25 1.172 2.07 2.734 2.07 1.64 0 2.696-.82 2.696-2.187' />
    </g>
    <defs>
      <clipPath id='405ee418b9da7a5ee271e3a8e94f3c57__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedIosLgIcon);
export default ForwardRef;
