import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMacosMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.406 13.719c0 1.344-.687 2.187-1.812 2.187S5.78 15.062 5.78 13.72c0-1.344.688-2.188 1.813-2.188s1.812.844 1.812 2.188m1.563-4.75L10.5 9c-.281.031-.406.125-.406.313 0 .187.156.28.375.28.281 0 .5-.187.5-.437zM2 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C16.469 6.53 18 9.156 18 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 2 12m9.844-3.125c0 .656.344 1.063.937 1.063.5 0 .813-.282.844-.688h-.375c-.062.219-.219.344-.469.344-.344 0-.531-.281-.531-.719s.188-.687.531-.687c.25 0 .438.156.469.343h.375c-.031-.375-.344-.687-.844-.687-.594 0-.937.406-.937 1.031m-5.375-.969v1.969h.375V8.656c0-.25.187-.469.437-.469.219 0 .375.157.375.376v1.312h.407v-1.25c0-.25.156-.437.406-.437s.375.156.375.406v1.281h.406V8.5c0-.406-.219-.656-.625-.656-.281 0-.531.156-.625.375h-.031a.59.59 0 0 0-.563-.375c-.25 0-.468.125-.531.375h-.031v-.344zm3.656 5.813c0-1.719-.969-2.813-2.531-2.813-1.532 0-2.5 1.094-2.5 2.813 0 1.75.968 2.844 2.5 2.844 1.562 0 2.531-1.094 2.531-2.844m.25-3.813c.25 0 .469-.094.594-.312H11v.281h.375V8.531c0-.437-.281-.687-.781-.687-.438 0-.781.218-.813.562h.375c.063-.156.219-.219.438-.219.25 0 .406.126.406.344v.156l-.562.032c-.47.031-.72.25-.72.625-.03.344.25.562.657.562m4.313 5c0-.781-.47-1.219-1.594-1.469l-.594-.156c-.75-.156-1.062-.437-1.062-.875 0-.562.53-.906 1.218-.906.719 0 1.188.375 1.25.969h.688c-.031-.906-.844-1.563-1.906-1.563-1.157 0-1.938.625-1.938 1.531 0 .782.469 1.282 1.563 1.5l.624.157c.75.156 1.063.469 1.063.906 0 .563-.562.938-1.281.938-.813 0-1.344-.344-1.438-.938h-.656c.063.938.844 1.563 2.031 1.563 1.219 0 2.031-.657 2.031-1.657' />
    </g>
    <defs>
      <clipPath id='51472d1e88b140842a85241c475e1d02__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMacosMdIcon);
export default ForwardRef;
