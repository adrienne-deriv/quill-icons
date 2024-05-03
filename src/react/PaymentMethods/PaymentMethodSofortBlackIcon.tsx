import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodSofortBlackIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#000'>
      <path d='m71.777 31.076 3.096-15.248c.215-1-.386-1.988-1.348-2.281a2.137 2.137 0 0 0-2.57 1.515l-3.587 12.16a.723.723 0 0 1-.895.488.71.71 0 0 1-.521-.66l-2.824-11.937a2 2 0 0 0-.855-1.25 2.01 2.01 0 0 0-1.505-.277c-.933.199-1.629 1.438-1.348 2.547l.012.078 1.617 13.177 1.015 1.499a2.99 2.99 0 0 1 1.85-1.16 5.3 5.3 0 0 1 1.919-.013c.143.021.254.049.323.066l.03.007.022.006zM61.66 35.993c.221-.146.404-.34.537-.566-.791-.8-.987-1.79-.77-2.92l-1.588-2.345a.7.7 0 0 1-.139-.204l-.744-1.1c-.922-1.332-1.813-1.793-2.88-1.187l-.148.105c-.825.567-.934 1.915-.079 3.204l3.146 4.63a1.817 1.817 0 0 0 2.508.473z' />
      <path d='M63.486 34.632q.1.076.17.182c.42.274 1.01.513 1.806.73l5.532 1.227c.918.21.625 1.566-.293 1.395l-.176-.024c-.691-.066-1.477-.016-2.2.25-1.344.5-2.184 1.649-2.293 3.782a.715.715 0 0 1-.758.672.71.71 0 0 1-.68-.75c.11-2.36 1.04-3.903 2.532-4.735l-2.012-.461a9 9 0 0 1-1.766-.656 3.2 3.2 0 0 1-.903.921l-.157.106a3 3 0 0 1-.282.168 3.2 3.2 0 0 1 .382 1.467 3.2 3.2 0 0 1-.9 2.268l-.15.145a3.28 3.28 0 0 1-4.582.066l-1.078-1.063c.861 4.183 4.566 7.01 8.945 7.124a1 1 0 0 1 .12-.009c7.224.067 10.264-3.942 10.81-10.404.161-1.845-.16-2.966-.718-3.56a1.4 1.4 0 0 0-.43-.305l-.156-.05-8.4-1.938a1 1 0 0 0-.139-.03l-.131-.025a3.5 3.5 0 0 0-1.344 0 1.59 1.59 0 0 0-1.282 1.188c-.283.933-.26 1.645.339 2.216q.105.036.194.103' />
      <path d='m55.445 32.947 2.35 3.464a3.26 3.26 0 0 0 2.742 1.408 1.75 1.75 0 0 1-.105 2.363l-.132.148a1.805 1.805 0 0 1-2.532.028l-4.001-3.92c-1.106-1.093-1.25-2.437-.559-3.148l.133-.145a1.65 1.65 0 0 1 2.104-.198M70.154 61.757c0 1.188-.91 2.098-2.083 2.098-1.16 0-2.079-.898-2.079-2.098a2.064 2.064 0 0 1 2.083-2.094 2.063 2.063 0 0 1 2.078 2.094M53.165 63.855a2.06 2.06 0 0 0 2.083-2.098 2.065 2.065 0 0 0-2.079-2.094c-1.172 0-2.079.91-2.079 2.094 0 1.2.915 2.098 2.075 2.098' />
      <path
        fillRule='evenodd'
        d='M19.158 72.967h89.685A5.18 5.18 0 0 0 114 67.825V12.191c0-2.852-2.333-5.158-5.212-5.158H19.212C16.332 7.033 14 9.34 14 12.191v55.618a5.18 5.18 0 0 0 5.157 5.158m46-24.12a.7.7 0 0 1-.26.028c-5.788 0-10.7-4.185-10.846-10.157l-1.309-1.29c-1.614-1.595-1.867-3.822-.574-5.143l.133-.144a3.1 3.1 0 0 1 2.003-.908l.023-.002c-.9-1.755-.615-3.685.787-4.627l.2-.133c1.537-.882 2.862-.539 3.999.581l-1.308-10.618c-.437-1.844.711-3.876 2.47-4.243a3.44 3.44 0 0 1 3.546 1.416c.252.369.427.784.517 1.221l2.217 9.374 2.811-9.522a3.57 3.57 0 0 1 4.345-2.505 3.38 3.38 0 0 1 2.376 3.942L73.182 31.4l1.332.307a2.45 2.45 0 0 1 1.372.79c.867.91 1.282 2.426 1.094 4.641-.591 6.996-4.02 11.61-11.823 11.709m21.367 17.04a1.523 1.523 0 0 0 1.52-1.504 1.52 1.52 0 1 0-3.04 0c0 .832.68 1.504 1.52 1.504m-4.892-6.162v1.954c0 1.399.918 2.016 2.184 1.977v2.11h-.332c-2.774 0-4.118-1.817-4.118-3.954V55.22h2.266v1.25c0 1.082.89 1.899 2.117 1.926v2.122q-1.358.002-2.117-.794m-5.787-1.039v-.91h-2.2v7.978h2.267v-3.641c0-1.317.785-2.055 2.149-2.055v-2.4c-1.032-.038-1.763.301-2.216 1.028m-12.12 3.071c0 2.31 1.946 4.208 4.349 4.208 2.399 0 4.345-1.903 4.345-4.208s-1.946-4.204-4.345-4.204c-2.403 0-4.349 1.899-4.349 4.204m-.598-5.43v-2.11h-.336c-2.758 0-4.118 1.82-4.118 3.953v7.58h2.266v-3.32c0-1.106.868-1.9 2.122-1.923V58.37c-.895 0-1.614.262-2.122.789v-.856c0-1.398.919-2.031 2.188-1.977m-14.308 5.43c0 2.31 1.95 4.208 4.349 4.208s4.345-1.903 4.345-4.208-1.946-4.204-4.345-4.204-4.349 1.899-4.349 4.204m-4.81 4.208c2.267 0 3.998-1.504 3.998-3.704 0-2.047-1.466-2.93-3.267-3.458-1.145-.328-1.863-.578-1.863-1.383 0-.672.492-1.2 1.277-1.2.664 0 1.16.384 1.524.962l1.875-1.172c-.586-1.282-1.906-1.938-3.332-1.938-2.267 0-3.704 1.606-3.704 3.477 0 1.493.906 2.641 3.133 3.286 1.211.344 1.985.582 1.985 1.532 0 .894-.653 1.445-1.602 1.445-1.012 0-1.785-.644-2.25-1.238l-1.563 1.543c.844 1.133 2.203 1.848 3.79 1.848'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodSofortBlackIcon);
export default ForwardRef;
