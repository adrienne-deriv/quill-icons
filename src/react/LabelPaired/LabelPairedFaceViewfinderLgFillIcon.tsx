import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.188 5.5h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.188a.31.31 0 0 0-.313.313v3.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V7.687C0 6.517.977 5.5 2.188 5.5m12.5 0h3.124C18.985 5.5 20 6.516 20 7.688v3.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V7.687a.336.336 0 0 0-.312-.312h-3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938M1.874 20.188v3.125c0 .195.117.312.313.312h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.188A2.184 2.184 0 0 1 0 23.313v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m18.125 0v3.125c0 1.21-1.016 2.187-2.187 2.187h-3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.124a.31.31 0 0 0 .313-.312v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938M3.75 15.5c0-2.227 1.172-4.258 3.125-5.39 1.914-1.133 4.297-1.133 6.25 0 1.914 1.132 3.125 3.163 3.125 5.39 0 2.266-1.21 4.297-3.125 5.43-1.953 1.133-4.336 1.133-6.25 0A6.22 6.22 0 0 1 3.75 15.5m5-1.562A.95.95 0 0 0 7.813 13a.925.925 0 0 0-.938.938c0 .546.39.937.938.937.507 0 .937-.39.937-.937m3.438.937c.507 0 .937-.39.937-.937a.95.95 0 0 0-.937-.938.925.925 0 0 0-.938.938c0 .546.39.937.938.937m-5.586 2.07c-.235.235-.235.625 0 .899.859.86 2.07 1.406 3.398 1.406s2.5-.547 3.36-1.406c.234-.274.234-.664 0-.899-.274-.234-.665-.234-.9 0A3.33 3.33 0 0 1 10 18c-.977 0-1.875-.39-2.5-1.055-.234-.234-.625-.234-.898 0' />
    </g>
    <defs>
      <clipPath id='48c44c67f9140deebd8979247ab704fa__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderLgFillIcon);
export default ForwardRef;
