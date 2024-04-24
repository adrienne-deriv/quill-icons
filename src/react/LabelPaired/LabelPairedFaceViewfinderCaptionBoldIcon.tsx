import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 4.813C0 4.109.586 3.5 1.313 3.5h1.875a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H1.312a.185.185 0 0 0-.187.188v1.875a.555.555 0 0 1-.562.562A.54.54 0 0 1 0 6.688zm8.25-.75c0-.305.234-.563.563-.563h1.874c.704 0 1.313.61 1.313 1.313v1.875a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V4.813a.2.2 0 0 0-.187-.188H8.812a.54.54 0 0 1-.562-.562M.563 11.75a.57.57 0 0 1 .562.563v1.874c0 .118.07.188.188.188h1.875a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H1.312A1.31 1.31 0 0 1 0 14.188v-1.876c0-.304.234-.562.563-.562m10.875 0a.57.57 0 0 1 .562.563v1.874c0 .727-.61 1.313-1.312 1.313H8.812a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563h1.874c.094 0 .188-.07.188-.187v-1.876c0-.304.234-.562.563-.562M5.625 8.563a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563m1.313.562a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562M6 6.875c-.96 0-1.805.516-2.273 1.313a2.52 2.52 0 0 0 0 2.624A2.58 2.58 0 0 0 6 12.126c.938 0 1.781-.492 2.25-1.312a2.52 2.52 0 0 0 0-2.626C7.781 7.392 6.938 6.876 6 6.876m0 6.375a3.73 3.73 0 0 1-3.258-1.875 3.7 3.7 0 0 1 0-3.75A3.78 3.78 0 0 1 6 5.75c1.336 0 2.555.727 3.234 1.875a3.7 3.7 0 0 1 0 3.75A3.72 3.72 0 0 1 6 13.25m-.984-3.187c.187.351.562.562.984.562.398 0 .773-.21.96-.562.118-.165.33-.235.517-.118.187.094.234.328.14.516-.328.539-.937.937-1.617.937a1.94 1.94 0 0 1-1.64-.937c-.094-.188-.048-.422.14-.516a.37.37 0 0 1 .516.117' />
    </g>
    <defs>
      <clipPath id='7aeffb5f3d2296a51fda4c49cb2217d0__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderCaptionBoldIcon);
export default ForwardRef;
