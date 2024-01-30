import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.453 7.781-.61 2.203q-.28.891-1.077 1.266a6 6 0 0 0-.985.563q-.703.468-1.593.328l-2.297-.563a.2.2 0 0 0-.188 0q-.375.469-.703 1.031l-.187.329q-.282.515-.516 1.078 0 .094.094.187l1.593 1.688q.61.656.563 1.547A3.4 3.4 0 0 0 4.5 18q0 .281.047.61.047.843-.563 1.5l-1.593 1.687q-.095.047-.141.187.234.563.563 1.078l.187.329q.328.562.703 1.03a.2.2 0 0 0 .188 0l2.25-.562q.938-.14 1.593.328a8.4 8.4 0 0 0 1.032.563q.75.375 1.078 1.266l.61 2.203a.7.7 0 0 0 .14.187 10.6 10.6 0 0 0 2.812 0 .7.7 0 0 0 .14-.187l.61-2.203q.282-.891 1.078-1.266a8.4 8.4 0 0 0 1.032-.562 2.08 2.08 0 0 1 1.547-.329l2.296.563a.2.2 0 0 0 .188 0q.375-.469.703-1.031l.188-.328q.28-.516.515-1.079 0-.14-.094-.187l-1.593-1.688q-.61-.655-.516-1.5v-1.171q-.093-.891.516-1.547l1.593-1.688q.094-.047.141-.187a7 7 0 0 0-.562-1.078L21 12.609a8.5 8.5 0 0 0-.703-1.03.2.2 0 0 0-.188 0l-2.25.562q-.937.14-1.593-.328a8.4 8.4 0 0 0-1.032-.563q-.75-.375-1.078-1.219l-.61-2.25a.7.7 0 0 0-.14-.187 10.6 10.6 0 0 0-2.812 0 .7.7 0 0 0-.14.187M12 6q.938 0 1.781.14.14 0 .235.094.702.33.937 1.125l.656 2.25q.047.141.282.282.609.281 1.218.703.188.094.375.094l2.25-.563q.798-.187 1.453.234a.7.7 0 0 1 .188.141q.515.61.938 1.313l.187.374q.375.705.656 1.454.048.093.094.234 0 .797-.562 1.406l-1.594 1.64a.5.5 0 0 0-.14.376Q21 17.625 21 18t-.047.703q0 .234.14.375l1.595 1.688q.562.563.562 1.359a2 2 0 0 1-.094.234q-.28.75-.656 1.453l-.187.375h-.047q-.375.704-.891 1.313a.7.7 0 0 1-.187.14 1.96 1.96 0 0 1-1.454.282l-2.25-.563a.53.53 0 0 0-.375.047 8 8 0 0 1-1.218.703q-.235.141-.282.282l-.656 2.25q-.235.796-.937 1.172a.5.5 0 0 1-.235.046Q12.938 30 12 30t-1.781-.14a.5.5 0 0 1-.235-.047q-.702-.375-.937-1.172l-.656-2.25q-.047-.141-.282-.282a8 8 0 0 1-1.218-.703.53.53 0 0 0-.375-.047l-2.25.563q-.798.14-1.453-.235l-.188-.187a7.5 7.5 0 0 1-.89-1.312h-.048l-.187-.375q-.375-.704-.656-1.454a.5.5 0 0 1-.047-.234q-.047-.75.516-1.36l1.593-1.687a.5.5 0 0 0 .14-.375A5 5 0 0 1 3 18v-.328q0-.187.047-.375a.5.5 0 0 0-.14-.375l-1.594-1.64a2 2 0 0 1-.563-1.407q.047-.141.094-.234.28-.75.656-1.453l.188-.376h.046q.375-.703.891-1.312a.7.7 0 0 1 .188-.14q.655-.423 1.453-.235l2.25.563q.188 0 .375-.094a8 8 0 0 1 1.218-.703q.235-.141.282-.282l.656-2.25q.234-.796.937-1.125a.32.32 0 0 1 .235-.093A11 11 0 0 1 12 6M9.375 18q.047 1.5 1.313 2.25 1.312.75 2.624 0 1.266-.75 1.313-2.25-.047-1.5-1.312-2.25-1.313-.75-2.626 0-1.264.75-1.312 2.25m6.75 0q-.094 2.344-2.062 3.563-2.063 1.125-4.126 0Q7.969 20.344 7.876 18q.094-2.344 2.063-3.562 2.062-1.125 4.124 0 1.969 1.218 2.063 3.562' />
    </g>
    <defs>
      <clipPath id='771a1ff1573a941863a16a352a048d12__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearXlRegularIcon);
export default ForwardRef;
