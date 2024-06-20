import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeyCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.984 9.29c-.539 0-1.03-.165-1.453-.493-.093-.07-.164-.14-.258-.211a2.35 2.35 0 0 1-.703-1.711c0-.68.235-1.242.703-1.71a2.35 2.35 0 0 1 1.711-.704c.68 0 1.243.234 1.711.703.492.469.727 1.055.727 1.711s-.235 1.242-.727 1.71l-.21.212c-.094.07-.188.117-.282.187-.187.118-.398.188-.633.258-.187.024-.375.047-.586.047m.914-1.5c.282-.259.399-.54.399-.915 0-.352-.117-.633-.399-.914a1.2 1.2 0 0 0-.914-.375c-.375 0-.656.117-.914.375s-.375.539-.375.914c0 .352.117.656.375.914s.563.375.914.375c.375 0 .657-.117.914-.375m-2.625 2.226.024-.024a8 8 0 0 1 1.664-.187h.141c.14 0 .28 0 .421.023.188 0 .375.024.563.047-.024.14-.024.258-.024.375.024.422.141.797.305 1.172.258.469.61.867 1.055 1.148v1.57H2.555v-1.85q0-.528.28-.985c.212-.305.446-.54.774-.703a8.3 8.3 0 0 1 1.664-.61zm1.711.914c-.492 0-.984.047-1.453.164a6.5 6.5 0 0 0-1.43.515c-.117.07-.21.164-.304.282-.07.14-.117.257-.117.398v.727h4.5a3.8 3.8 0 0 1-.797-1.102 3.8 3.8 0 0 1-.352-.984zm4.29 4.406-.844-.82V11.96a1.93 1.93 0 0 1-.985-.68 1.9 1.9 0 0 1-.375-1.172c0-.539.188-.984.563-1.359a1.84 1.84 0 0 1 1.36-.562c.538 0 .984.187 1.359.562s.562.844.562 1.36c0 .421-.117.773-.328 1.1-.234.306-.516.54-.89.68l.679.704-.844.82.844.82zm-.282-4.945c.211 0 .399-.094.492-.258a.53.53 0 0 0 0-.586.51.51 0 0 0-.492-.258c-.21-.023-.398.094-.515.258a.65.65 0 0 0 0 .586.62.62 0 0 0 .515.258' />
    </g>
    <defs>
      <clipPath id='d012f781896c423ea58b034382f86764__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeyCaptionBoldIcon);
export default ForwardRef;
