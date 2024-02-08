import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfLgBoldIcon = (
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
      <path d='M2.5 23.625h1.25V25.5H2.5q-1.055-.039-1.758-.742Q.04 24.054 0 23V8q.039-1.055.742-1.758T2.5 5.5h6.484q1.015 0 1.758.742l3.516 3.516Q15 10.5 15 11.555v5.195h-1.875v-5H10q-.547 0-.898-.352-.352-.35-.352-.898V7.375H2.5q-.585.039-.625.625v15q.039.585.625.625m4.375-4.375h1.25q.938.039 1.563.625.585.625.624 1.563-.038.937-.624 1.562-.625.585-1.563.625H7.5v1.25q-.039.585-.625.625-.585-.039-.625-.625v-5q.039-.585.625-.625m1.25 3.125q.859-.079.938-.937-.079-.86-.938-.938H7.5v1.875zm3.75-3.125h1.25q.78.039 1.328.547.508.546.547 1.328v2.5q-.039.78-.547 1.328-.546.508-1.328.547h-1.25q-.585-.039-.625-.625v-5q.039-.585.625-.625m1.25 5q.585-.039.625-.625v-2.5q-.039-.585-.625-.625H12.5v3.75zm3.125-4.375q.039-.585.625-.625h1.875q.585.039.625.625-.039.585-.625.625H17.5v1.25h1.25q.585.039.625.625-.039.585-.625.625H17.5v1.875q-.039.585-.625.625-.585-.039-.625-.625v-5' />
    </g>
    <defs>
      <clipPath id='0300af1e7be72da1537c1bcbbf8e3ee2__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfLgBoldIcon);
export default ForwardRef;
