import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivP2pXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.703 15.984c-.187-.046-.375-.046-.61-.046h-.327c-.047 0-.094.046-.141.046h-.14v1.922H9c.516 0 .89-.047 1.172-.187s.375-.422.375-.797c0-.188 0-.375-.094-.469-.047-.14-.14-.234-.281-.328-.14-.047-.281-.094-.469-.14m10.828 0c-.14-.046-.375-.046-.562-.046h-.375c-.094 0-.14.046-.188.046h-.047v1.922h.47c.515 0 .937-.047 1.171-.187.281-.14.422-.422.422-.797 0-.188-.047-.375-.14-.469-.048-.14-.141-.234-.282-.328a3 3 0 0 0-.469-.14M7.5 6h15c2.484 0 4.5 2.016 4.5 4.5v15c0 2.484-2.016 4.5-4.5 4.5h-15A4.5 4.5 0 0 1 3 25.5v-15C3 8.016 5.016 6 7.5 6m1.078 8.672h-.562c-.188.047-.375.047-.516.094-.187 0-.375.046-.516.046v6.657h1.5v-2.25H9c.984 0 1.781-.188 2.297-.563.562-.328.844-.937.844-1.734s-.282-1.406-.797-1.735c-.563-.374-1.313-.562-2.344-.562-.14 0-.281.047-.422.047m8.11 1.031a1.8 1.8 0 0 0-.422-.61 2.5 2.5 0 0 0-.703-.374c-.282-.094-.61-.14-1.032-.14s-.844.093-1.219.28c-.374.141-.703.375-.984.657l.703.984c.047-.047.14-.094.235-.14.093-.094.187-.188.328-.235.094-.094.234-.14.422-.187.14-.094.28-.094.468-.094.235 0 .47.047.61.14.187.141.234.329.234.61 0 .14 0 .281-.094.422-.046.093-.14.234-.234.375l-.797.797c-.094.093-.234.187-.328.28l-.281.282c-.188.188-.375.422-.563.656-.14.235-.281.469-.375.703a2.7 2.7 0 0 0-.14.891v.469h4.5V20.25h-2.907c.047-.047.094-.14.141-.234.094-.094.188-.188.281-.328.094-.047.14-.141.235-.188 0-.047.046-.094.093-.14l.891-.891c.188-.14.328-.328.469-.516l.093-.094c.141-.187.282-.422.375-.656q.141-.352.141-.703c0-.281-.047-.562-.14-.797m3.187-1.078h-.047c-.14 0-.234.047-.375.047h-.562c-.375.047-.75.094-1.078.14v6.657h1.546v-2.25h.47c.983 0 1.78-.188 2.343-.563.515-.328.797-.937.797-1.734s-.282-1.406-.797-1.735c-.563-.328-1.313-.515-2.344-.562z' />
    </g>
    <defs>
      <clipPath id='60c92185e1c6f6872995d074ea67eb60__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivP2pXlFillIcon);
export default ForwardRef;
