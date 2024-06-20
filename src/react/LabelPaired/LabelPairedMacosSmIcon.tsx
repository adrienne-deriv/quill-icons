import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMacosSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.48 12.254c0 1.176-.601 1.914-1.585 1.914-.985 0-1.586-.738-1.586-1.914s.601-1.914 1.586-1.914c.984 0 1.585.738 1.585 1.914m1.368-4.156-.41.027c-.247.027-.356.11-.356.273 0 .165.137.247.328.247.246 0 .438-.165.438-.383zM2 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C14.66 5.965 16 8.262 16 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 2 10.75m8.613-2.734c0 .574.301.93.82.93.438 0 .712-.247.739-.602h-.328c-.055.191-.192.3-.41.3-.301 0-.465-.246-.465-.628 0-.383.164-.602.465-.602.218 0 .382.137.41.3h.328c-.027-.327-.3-.6-.738-.6-.52 0-.82.355-.82.902M5.91 7.168v1.723h.328V7.824c0-.219.164-.41.383-.41.191 0 .328.137.328.328v1.149h.356V7.797c0-.219.136-.383.355-.383s.328.137.328.356v1.12h.356V7.688c0-.355-.192-.574-.547-.574-.246 0-.465.137-.547.328h-.027a.51.51 0 0 0-.493-.328c-.218 0-.41.11-.464.328h-.028v-.3zm3.2 5.086c0-1.504-.848-2.461-2.215-2.461-1.34 0-2.188.957-2.188 2.46 0 1.532.848 2.49 2.188 2.49 1.367 0 2.214-.958 2.214-2.49m.218-3.336c.219 0 .41-.082.52-.273h.027v.246h.328V7.715c0-.383-.246-.602-.683-.602-.383 0-.684.192-.711.492h.328c.054-.136.191-.19.383-.19.218 0 .355.108.355.3v.137l-.492.027c-.41.027-.63.219-.63.547-.026.3.22.492.575.492m3.774 4.375c0-.684-.41-1.066-1.395-1.285l-.52-.137c-.656-.137-.93-.383-.93-.766 0-.492.466-.793 1.067-.793.63 0 1.04.329 1.094.848h.602c-.028-.793-.739-1.367-1.668-1.367-1.012 0-1.696.547-1.696 1.34 0 .683.41 1.12 1.367 1.312l.547.137c.657.137.93.41.93.793 0 .492-.492.82-1.121.82-.711 0-1.176-.3-1.258-.82h-.574c.055.82.738 1.367 1.777 1.367 1.067 0 1.778-.574 1.778-1.449' />
    </g>
    <defs>
      <clipPath id='6fb3bed3fc6e3dcb4bbcff7624012b0b__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMacosSmIcon);
export default ForwardRef;
