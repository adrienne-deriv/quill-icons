import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeOptionsIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g fillOpacity={0.72}>
      <path d='M6.84 28a2.822 2.822 0 0 1-2.813-2.813V18.08c0-.96.773-1.747 1.733-1.747h1.293c.96 0 1.747.787 1.747 1.747v1.907l1.52-1.52a4.642 4.642 0 0 1 3.293-1.374h3.467c.96 0 1.733.774 1.733 1.734v1.106a1.73 1.73 0 0 1-1.733 1.734h-2.667c-.52 0-1.04.213-1.413.586l-.96.96h1.907c.96 0 1.746.787 1.746 1.747v1.293c0 .96-.786 1.747-1.746 1.747zM5.76 17.68a.415.415 0 0 0-.413.413V25.2c0 .813.666 1.48 1.48 1.48h7.093a.415.415 0 0 0 .413-.413v-1.294a.415.415 0 0 0-.413-.413h-2.4a1.126 1.126 0 0 1-.8-1.92l1.307-1.307a3.318 3.318 0 0 1 2.36-.973h2.666c.227 0 .4-.173.4-.4v-1.107c0-.226-.173-.4-.4-.4h-3.466a3.34 3.34 0 0 0-2.36.974L9.36 21.293c-.32.32-.8.427-1.227.24a1.116 1.116 0 0 1-.693-1.04v-2.4a.415.415 0 0 0-.413-.413H5.733zM26.227 15.667h-1.294c-.96 0-1.746-.787-1.746-1.747v-1.907l-1.52 1.52a4.642 4.642 0 0 1-3.294 1.374h-3.466a1.73 1.73 0 0 1-1.733-1.734v-1.106c0-.96.773-1.734 1.733-1.734h2.666c.52 0 1.04-.213 1.414-.586l.96-.96H18.04c-.96 0-1.746-.787-1.746-1.747V5.747c0-.96.786-1.747 1.746-1.747h7.094a2.823 2.823 0 0 1 2.813 2.813v7.107c0 .96-.773 1.747-1.733 1.747zM23.4 10.4c.147 0 .294.027.44.08.427.173.694.587.694 1.04v2.4c0 .227.186.413.413.413h1.293a.415.415 0 0 0 .414-.413V6.813c0-.813-.667-1.48-1.48-1.48H18.08a.415.415 0 0 0-.413.414V7.04c0 .227.186.413.413.413h2.4a1.127 1.127 0 0 1 .8 1.92l-1.306 1.307a3.317 3.317 0 0 1-2.36.973h-2.667c-.227 0-.4.174-.4.4v1.107c0 .227.173.4.4.4h3.467a3.34 3.34 0 0 0 2.36-.973l1.866-1.867c.213-.213.507-.333.8-.333z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeOptionsIcon);
export default ForwardRef;
