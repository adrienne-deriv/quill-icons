import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyFibonacciFanIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#FF444F'
      d='M5.618 20.727a.38.38 0 0 1-.168.473l-.93.37-.14.02a.37.37 0 0 1-.14-.72l.93-.37a.38.38 0 0 1 .448.227m-.854-1.192a.38.38 0 0 1 .31.434.37.37 0 0 1-.154.241l-.8.58a.34.34 0 0 1-.22.07.37.37 0 0 1-.3-.15.39.39 0 0 1 .08-.53l.8-.58a.38.38 0 0 1 .284-.065m2.79.11c.09.04.16.113.196.205a.37.37 0 0 1-.21.49l-.93.36a.35.35 0 0 1-.14.07.35.35 0 0 1-.34-.24.38.38 0 0 1 .21-.53l.93-.36a.37.37 0 0 1 .284.005m2.296-.525a.37.37 0 0 1-.21.48l-.93.37a.4.4 0 0 1-.15.03.41.41 0 0 1-.34-.24.38.38 0 0 1 .21-.49l.93-.36a.38.38 0 0 1 .49.21m-3.286-.885a.38.38 0 0 1 .31.434.37.37 0 0 1-.154.241l-.8.58a.34.34 0 0 1-.22.07.37.37 0 0 1-.3-.15.39.39 0 0 1 .08-.53l.8-.58a.38.38 0 0 1 .284-.065m5.329.08a.38.38 0 0 1-.163.465l-.93.37-.14.02a.38.38 0 0 1-.35-.24.37.37 0 0 1 .22-.48l.93-.37a.38.38 0 0 1 .433.235m2.147-.845a.39.39 0 0 1-.21.49l-.94.36a.3.3 0 0 1-.14-.02v.05a.37.37 0 0 1-.13-.72l.93-.37a.38.38 0 0 1 .49.21m-5.59-.5a.372.372 0 0 1 .07.64l-.8.58a.34.34 0 0 1-.22.07.37.37 0 0 1-.3-.15.38.38 0 0 1 .08-.53l.8-.57a.37.37 0 0 1 .37-.04m7.566-.474a.37.37 0 0 1-.096.634l-.93.37-.14.03a.41.41 0 0 1-.35-.24.39.39 0 0 1 .21-.49l.94-.36a.37.37 0 0 1 .366.056m-5.86-.814a.37.37 0 0 1 .244.148.36.36 0 0 1-.08.52l-.8.58a.36.36 0 0 1-.22.07.36.36 0 0 1-.3-.15.38.38 0 0 1 .08-.53l.8-.57a.37.37 0 0 1 .277-.069m8.074.148a.37.37 0 0 1-.22.48l-.93.37a.3.3 0 0 1-.14-.03v.05a.36.36 0 0 1-.34-.23.38.38 0 0 1 .21-.49l.93-.37a.38.38 0 0 1 .49.22m1.977-1.066a.38.38 0 0 1-.127.676l-.93.36-.15.03a.37.37 0 0 1-.34-.24.37.37 0 0 1 .21-.48l.93-.37a.38.38 0 0 1 .407.024M12.2 14.53a.37.37 0 0 1-.08.52l-.8.58a.36.36 0 0 1-.22.03v.04a.36.36 0 0 1-.3-.15.37.37 0 0 1 .08-.53l.8-.57a.37.37 0 0 1 .52.08m9.563-.155a.38.38 0 0 1-.163.465l-.36.14a.4.4 0 0 1-.11.02l-.03.01a.35.35 0 0 1-.34-.24.37.37 0 0 1 .21-.49l.36-.14a.38.38 0 0 1 .433.235m-8.006-1.293a.38.38 0 0 1 .163.678l-.8.57a.4.4 0 0 1-.22.03v.04a.39.39 0 0 1-.31-.15.37.37 0 0 1 .09-.52l.8-.58a.37.37 0 0 1 .277-.069m1.8-1.3a.37.37 0 0 1 .243.148.39.39 0 0 1-.08.53l-.8.57a.4.4 0 0 1-.22.04v.04a.4.4 0 0 1-.31-.16.37.37 0 0 1 .09-.52l.8-.58a.37.37 0 0 1 .277-.069m1.8-1.3a.37.37 0 0 1 .243.148.39.39 0 0 1-.08.53l-.8.57a.4.4 0 0 1-.22.04v.04a.4.4 0 0 1-.31-.16.37.37 0 0 1 .09-.52l.8-.58a.37.37 0 0 1 .277-.069M19.4 9.34a.373.373 0 0 1-.09.52l-.8.58q-.106.045-.22.03v.04a.38.38 0 0 1-.364-.439.37.37 0 0 1 .154-.241l.8-.58a.373.373 0 0 1 .52.09m1.157-1.213a.36.36 0 0 1 .243.153.37.37 0 0 1-.08.52l-.41.3a.4.4 0 0 1-.22.07.38.38 0 0 1-.364-.439.37.37 0 0 1 .154-.241l.4-.29a.36.36 0 0 1 .277-.073'
    />
    <path
      fill='#85ACB0'
      d='M6.024 2.783a1 1 0 0 1 1.952.434L4.546 18.65 19.14 3.16a.5.5 0 1 1 .72.68L4.637 20H21a1 1 0 0 1 .993.883L22 21a1 1 0 0 1-1 1H3a1 1 0 0 1-.976-1.217z'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyFibonacciFanIcon);
export default ForwardRef;
