import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksHomeDepotIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#1000d055f8233766160232266d2a310f__a)'>
      <path
        fill='#F96302'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M22.697 4H23.8l.88.88c.064.053.107.149.064.234-.042.116-.148.233-.276.243a1 1 0 0 1-.267-.102l-.093-.046c-.318-.138-.658-.223-.997-.19-.371.03-.721.2-1.029.413a15 15 0 0 0-.403-.414zM27.715 7.796l.285.287v1.23l-.342.34c-.228.226-.457.452-.676.678-.074-.063-.14-.132-.207-.201q-.098-.105-.207-.202.024-.036.046-.072a1 1 0 0 1 .07-.108c.15-.244.255-.52.287-.795a2.16 2.16 0 0 0-.201-1.21l-.025-.06c-.048-.118-.096-.237-.06-.364.021-.074.095-.127.159-.159.106-.042.233 0 .308.075q.284.275.563.561M27.962 16.157l.038-.014V28h-.01V16.62l-.923.923c-.053.053-.117.106-.202.096-.085-.011-.159-.117-.127-.202.008-.033.023-.062.037-.09.022-.047.044-.091.037-.143a.5.5 0 0 0-.121-.154l-.027-.027c-.658-.646-1.315-1.304-1.973-1.961a7 7 0 0 0-.223-.223c-.113-.11-.227-.219-.328-.34q.326-.318.648-.646l.003-.003.324-.326c.62.604 1.229 1.214 1.839 1.826l.611.613q.04.035.078.078c.046.049.095.1.155.134.052.026.11.003.164-.018M17.48 27.152c-.29.28-.57.559-.86.848h-.474c.028-.066.052-.138-.003-.201q-.12-.135-.25-.26a6 6 0 0 1-.195-.197q-.445-.444-.885-.89l-.886-.891-.021-.017c-.047-.039-.095-.079-.16-.079q-.054.016-.104.04c-.041.02-.082.04-.129.045-.085-.01-.17-.095-.159-.19a.5.5 0 0 1 .125-.175q.029-.03.055-.06.21-.205.415-.412.271-.277.55-.541.987.994 1.983 1.984zM10.915 26.42 9.335 28H4h4.475q.016-.034.033-.068a.5.5 0 0 0 .074-.229c-.011-.106-.096-.19-.17-.265a1279 1279 0 0 0-3.797-3.786q-.038-.036-.075-.076c-.065-.07-.132-.142-.232-.158-.085 0-.17.04-.249.079L4 23.524v-.827c.417-.425.846-.843 1.269-1.256l.407-.398a.5.5 0 0 1 .307-.16c.18-.01.34.17.287.34q-.026.075-.06.145c-.04.082-.078.164-.078.258.027.108.107.185.183.258l.04.04 3.839 3.838c.063.064.127.128.222.138a.56.56 0 0 0 .24-.073c.054-.026.107-.052.163-.065.17-.032.34.138.318.308-.02.148-.127.254-.222.35M21.403 5.379c-.02-.043-.063-.01-.084.01-.616.605-1.22 1.22-1.825 1.835-.095.106-.159.265-.095.403.053.074.127.149.223.149.088.005.166-.033.242-.07a.5.5 0 0 1 .214-.068c.108-.01.18.062.249.132l.01.01.006.006c.862.87 1.729 1.734 2.598 2.6v.001l1.305 1.302.02.023c.058.066.118.135.118.22a.5.5 0 0 1-.07.213.5.5 0 0 0-.068.212c-.01.16.148.297.297.286a.54.54 0 0 0 .286-.148l1.845-1.845-1.759-1.762q-1.753-1.759-3.512-3.51M24.097 5.74c-.106-.022-.201.063-.254.158-.043.128.01.265.095.403.138.223.255.488.233.764a1 1 0 0 1-.074.257l-.032.082c.073.085.156.166.24.248q.094.092.185.187a.9.9 0 0 1 .37-.106c.255-.01.5.085.711.212l.018.01c.091.051.191.107.3.107.138-.01.266-.138.255-.286-.017-.114-.1-.192-.181-.269l-.052-.05-.51-.507a101 101 0 0 1-1.04-1.044c-.075-.076-.153-.158-.264-.167M13.156 6.812q-.21.209-.417.423.044.045.09.095.054.06.122.127a.3.3 0 0 0 .118-.057q.04-.028.083-.049c.266-.148.605-.138.88 0l.06.025c.048.022.1.046.153.039.095-.043.17-.17.085-.255l-.764-.763q-.2.207-.41.415M13.302 8.124c-.242-.244-.485-.49-.733-.73-.329.328-.647.647-.965.975-.042.043-.085.096-.085.16-.01.074.064.148.138.159.04-.005.078-.022.115-.04.053-.023.105-.047.16-.035.048.02.082.058.117.096q.029.034.064.063l.654.656.001.002.002.002q.659.664 1.326 1.324c.043.042.096.106.064.17q-.01.034-.029.073c-.031.068-.064.14-.003.202.064.095.202.064.265-.01l.987-.987-1.719-1.718zM14 7.595a.154.154 0 0 0-.116.202q.022.058.052.114c.038.075.075.15.075.236.032.116 0 .244-.031.35.074.063.148.138.222.212a.53.53 0 0 1 .456 0 .6.6 0 0 1 .106.051c.057.033.115.065.18.065.086.011.16-.074.15-.148 0-.066-.051-.115-.1-.163l-.017-.017c-.184-.177-.362-.358-.543-.54l-.274-.277c-.043-.042-.095-.095-.16-.085M18.964 7.871a.42.42 0 0 0-.254.127c-.626.615-1.241 1.241-1.856 1.877q.374.707.758 1.41c.254.47.51.94.758 1.411h.032a.1.1 0 0 1-.021.027q-.013.011-.021.026a.6.6 0 0 0-.096-.074c-.944-.466-1.887-.922-2.831-1.378a290 290 0 0 0-1.814 1.802.5.5 0 0 0-.148.234c-.043.138.042.286.17.34.105.03.211-.011.296-.075l.009-.007.005-.005.008-.007c.069-.06.147-.129.243-.119.29.036.54.165.792.294l.131.067q1.122.554 2.243 1.112 1.68.835 3.367 1.666.066-.074.137-.138l.065-.063a.4.4 0 0 0-.03-.063l-.013-.022a828 828 0 0 0-1.405-2.604q-.705-1.3-1.405-2.603.568.567 1.133 1.135l.001.001q1.128 1.134 2.26 2.257c.053.064.106.128.116.212.005.088-.032.164-.07.239-.04.078-.078.157-.068.25.022.137.149.254.287.243.117 0 .223-.074.307-.159l1.941-1.94a.43.43 0 0 0 .16-.287c.02-.17-.139-.34-.308-.308-.068.01-.13.04-.19.069a.5.5 0 0 1-.224.07c-.085 0-.142-.055-.2-.11l-.044-.04a659 659 0 0 0-2.575-2.577h-.001l-1.284-1.283-.023-.022c-.07-.069-.149-.147-.168-.243a.5.5 0 0 1 .07-.25c.03-.06.059-.12.068-.184.042-.17-.138-.33-.308-.308M15.634 8.401c-.064-.074-.19-.063-.233.021-.044.061-.016.137.013.215l.019.05c.095.213.137.446.095.68-.021.169-.106.317-.19.455.026.054.075.1.123.145q.042.038.078.078.297-.288.584-.582l.285-.288zM11.35 8.666c-.075.022-.128.075-.18.128-.33.339-.669.668-1.03.986-.074.074-.106.212-.01.276.064.052.128.022.193-.01.054-.026.11-.052.168-.033.06.034.105.082.148.127l.032.032q.206.2.408.403t.408.403l-.328.33.222.222q.117-.108.224-.221l.105-.108.923.923.025.023c.026.025.054.05.07.083.017.055-.007.107-.03.159-.022.049-.044.097-.033.148a.18.18 0 0 0 .106.106c.084.022.17-.042.222-.095.33-.318.658-.647.987-.976l.022-.027c.037-.044.075-.09.084-.142.031-.085-.053-.191-.149-.18-.035.004-.068.019-.102.034-.037.017-.076.034-.12.04-.064-.011-.117-.064-.16-.107L11.54 9.175c-.042-.042-.095-.095-.084-.159.004-.034.019-.067.033-.1.022-.046.043-.093.03-.144-.01-.074-.095-.116-.17-.106'
      />
      <path
        fill='#fff'
        d='M9.875 10.109c.075-.053.191-.021.223.063.02.064-.004.12-.028.178-.015.038-.031.077-.036.12 0 .052.043.095.075.127l.697.7q.695.699 1.392 1.389c.067.073.143.042.22.01.07-.027.14-.055.204-.01.085.074.053.212-.021.275l-.986.987c-.053.053-.106.106-.18.138-.085.02-.18-.032-.192-.117-.005-.05.016-.098.037-.145a.3.3 0 0 0 .038-.13c-.01-.043-.043-.075-.075-.107a173 173 0 0 0-2.017-2.035c-.043-.042-.087-.085-.146-.107-.053 0-.1.02-.146.04a.4.4 0 0 1-.109.034c-.074 0-.137-.063-.148-.138-.01-.074.053-.138.106-.19.329-.33.658-.658.976-.987.042-.042.074-.074.116-.095M8.051 11.912l.446-.446q.263.255.52.52l.264.265q.023.027.048.05c.033.034.066.067.08.11.032.126-.106.254-.234.2a1 1 0 0 1-.22-.137 2 2 0 0 0-.119-.085 1 1 0 0 0-.668-.17q-.042-.048-.09-.091c-.04-.04-.081-.079-.112-.12a.25.25 0 0 1 .085-.096M6.959 13.004q.286-.278.563-.56l.275-.278 1.59 1.591q.222.215.435.435.214.219.435.435c.066.074.145.039.222.005l.065-.027c.095-.042.201.043.19.138 0 .064-.042.117-.084.17L9.63 15.93c-.053.053-.106.095-.18.095-.074.011-.159-.063-.148-.148a.3.3 0 0 1 .033-.119.3.3 0 0 0 .03-.104c0-.05-.032-.086-.067-.125l-.028-.034q-.604-.597-1.204-1.198-.599-.6-1.204-1.199c.029-.02.048-.042.066-.063zM25.868 12.76l.31.307q.313.308.624.626c.095.096.031.276-.107.297-.093.017-.174-.041-.251-.098l-.056-.04c-.255-.17-.54-.328-.86-.275a1.7 1.7 0 0 1-.232-.244c.134-.127.259-.255.384-.382zM6.694 13.27c.062.02.106.072.15.123a1 1 0 0 0 .072.078c-.042.297.096.562.266.795l.027.038c.043.06.084.115.11.185.032.106-.074.222-.19.212-.056 0-.096-.04-.133-.08l-.016-.016-.827-.827c.127-.106.245-.221.363-.337zM12.304 14.69a3.1 3.1 0 0 1 1.559-.074c.88.19 1.654.7 2.27 1.336.604.615 1.092 1.39 1.251 2.249.095.466.074.965-.064 1.431-.137.456-.37.88-.678 1.241q-.083-.088-.172-.173a4 4 0 0 1-.231-.24c0-.037.014-.073.027-.11a.4.4 0 0 0 .026-.081.65.65 0 0 0-.17-.637 609 609 0 0 0-2.49-2.492l-.002-.001-1.252-1.25c-.116-.117-.254-.212-.424-.223-.121-.019-.235.02-.347.059l-.045.015c-.042.025-.071-.01-.097-.04l-.02-.023-.08-.079c-.079-.077-.156-.152-.228-.24v-.032a3.8 3.8 0 0 1 1.167-.636M15.708 14.552c.117.043.223.096.33.149.402.201.805.403 1.219.604a.6.6 0 0 1 .095.075q.256.262.514.52.26.257.515.519c.19.201.424.35.679.445a.85.85 0 0 0 .562 0c.095-.032.19-.063.286-.032.095.043.17.128.17.234-.01.138-.096.254-.191.35l-.307.309c-.206.208-.414.419-.626.624a.64.64 0 0 1-.297.17c-.17.021-.33-.149-.276-.308l.01-.033c.051-.15.104-.307.075-.465-.043-.287-.202-.541-.382-.764q-.679-.687-1.367-1.37l-.69-.687q-.065-.07-.13-.136a3 3 0 0 1-.189-.204M23.387 15.242l.572-.573c.064.048.122.108.178.166l.056.057c-.032.254.053.498.18.71q.042.074.096.145c.048.065.096.132.127.205.032.064.01.127-.011.191.318.212.594.488.817.796.254.36.434.784.424 1.24 0 .425-.18.838-.456 1.156l-.057-.055c-.058-.056-.118-.114-.166-.178q.007-.048.018-.095a.4.4 0 0 0 .014-.18c-.02-.107-.1-.187-.178-.264l-.024-.023q-.666-.657-1.327-1.325l-.666-.669c-.064-.063-.149-.127-.234-.138a.5.5 0 0 0-.254.043q-.056-.056-.117-.112-.06-.055-.117-.111c.34-.286.775-.467 1.22-.445.17 0 .34.031.51.074q-.145-.15-.3-.304-.153-.153-.305-.311M10.204 16.716a3.6 3.6 0 0 1 .615-1.05q.063.063.13.126.132.129.263.266c.013.053-.007.103-.027.15a.4.4 0 0 0-.026.084c-.064.212.02.456.18.615q1.22 1.229 2.449 2.451l1.231 1.229c.117.127.265.254.445.276.16.02.319-.032.467-.085l.139.136q.136.13.264.267a3.5 3.5 0 0 1-1.008.604 3 3 0 0 1-1.76.117c-.88-.191-1.665-.721-2.29-1.379-.573-.604-1.04-1.336-1.2-2.163a3 3 0 0 1 .128-1.644M21.658 17.448c.032-.382.201-.753.456-1.04l.223.223-.013.036c-.029.083-.058.167-.03.25.01.085.075.16.138.212l1.994 1.994.037.038c.063.066.13.137.228.164.09.027.172 0 .26-.028l.009-.003.014-.004.013-.004.012-.004.056.056c.059.056.119.114.166.178-.318.265-.71.445-1.134.445-.403.021-.806-.127-1.146-.34a3.4 3.4 0 0 1-.657-.561c.085.297.063.625-.075.901-.137.276-.35.499-.562.71l-.073-.075a3 3 0 0 0-.16-.158c.064-.106.106-.233.064-.36a.9.9 0 0 0-.212-.276l-.032-.032-.19-.192q-.183-.19-.372-.37c-.106-.106-.234-.223-.393-.233-.09-.01-.17.036-.24.077l-.014.008-.234-.234c.308-.307.647-.615 1.093-.678.36-.064.732.095.986.35-.148-.319-.244-.69-.212-1.05M8.37 18.328a.46.46 0 0 1 .275-.138c.17-.01.329.17.286.34a1 1 0 0 1-.056.134.7.7 0 0 0-.081.247c.01.107.09.187.17.265l.02.022 3.882 3.881.003.002.011.01.01.01c.057.047.114.096.188.105a.5.5 0 0 0 .23-.07c.054-.027.11-.054.173-.067.17-.032.329.116.329.286 0 .116-.064.212-.149.297l-1.95 1.951c-.086.085-.192.16-.32.16-.148 0-.296-.139-.275-.298.005-.074.04-.143.074-.212a.6.6 0 0 0 .075-.212c0-.08-.052-.137-.106-.197l-.032-.036-.584-.581q-.582-.578-1.155-1.158l-.008-.009c-.021-.022-.05-.051-.077-.023q-.151.144-.297.297-.146.152-.297.297c-.138-.138-.276-.276-.403-.414q.285-.302.604-.604v-.043q-.412-.405-.816-.811-.404-.405-.817-.812-.032-.028-.062-.06c-.063-.061-.126-.125-.214-.141a.5.5 0 0 0-.25.07c-.06.03-.12.059-.185.068-.19.032-.36-.18-.296-.36.025-.1.095-.175.166-.248l.056-.06q.463-.47.934-.94.473-.471.943-.948M20.128 19.504q.185.188.374.372l1.697 1.697.034.029c.028.024.055.048.093.056.05.005.095-.016.141-.037.052-.024.105-.048.167-.037.063.02.127.085.116.159 0 .087-.07.156-.13.216l-.01.008-.008.01q-.36.351-.711.708l-.35.352c-.074.085-.222.042-.275-.053-.036-.057-.01-.116.016-.174.027-.061.054-.122.005-.176l-2.196-2.196-.03-.032c-.04-.041-.078-.08-.129-.105-.062-.02-.118.006-.174.033-.04.018-.08.036-.123.04-.074-.01-.148-.073-.148-.158-.01-.085.053-.16.117-.213.35-.328.689-.668 1.018-.996q.26.245.506.497M17.373 21.255l.223-.224c.223-.225.448-.452.679-.667q.265.273.54.543.138.135.276.274c.096.085 0 .222-.095.265-.049.008-.098-.015-.141-.036l-.04-.017a1.1 1.1 0 0 0-.752-.106c-.13.026-.254.095-.37.16l-.076.041c-.085-.084-.159-.159-.244-.233M16.154 22.485l1.05-1.05 1.686 1.687.433.435q.428.434.86.858-.255.262-.512.519-.257.255-.505.51a.45.45 0 0 1-.18.106l-.01-.003c-.061-.02-.13-.043-.15-.114-.023-.064.005-.121.033-.18.023-.047.046-.096.042-.148-.045-.08-.111-.145-.175-.207l-.038-.037-1.834-1.835a2 2 0 0 1-.104-.103c-.07-.071-.14-.144-.225-.194-.054-.009-.107.015-.159.038-.07.032-.14.064-.212.015-.117-.074-.085-.223 0-.297M18.593 21.86c-.042-.107.053-.223.16-.202.052.01.084.042.126.085l.796.795q.03.03.063.058c.071.064.146.13.17.229l-.008.013-.003.006c-.03.05-.063.11-.137.118-.083.007-.147-.03-.214-.069a1 1 0 0 0-.115-.058.56.56 0 0 0-.488 0l-.244-.244a.53.53 0 0 0 .042-.382c-.012-.077-.049-.147-.085-.216a1 1 0 0 1-.063-.133M20.216 22.517c.053-.085.18-.095.243-.021.276.276.552.551.817.827l-.229.23v.001c-.229.23-.455.459-.694.681-.074-.074-.148-.148-.222-.233.265-.329.307-.817.127-1.199l-.021-.05c-.034-.077-.073-.167-.021-.236M16.992 23.822c-.372-.244-.817-.414-1.262-.372-.393.021-.775.223-1.061.499.034.068.086.114.138.16q.044.039.085.084l.013-.008c.071-.04.152-.087.241-.077.17.021.297.138.414.254l1.697 1.697c.106.106.212.234.233.382.01.088-.035.176-.075.256l-.01.02q.077.084.158.16l.076.073c.339-.329.53-.806.52-1.283 0-.414-.16-.817-.404-1.146-.201-.286-.477-.509-.763-.7'
      />
    </g>
    <defs>
      <clipPath id='1000d055f8233766160232266d2a310f__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksHomeDepotIcon);
export default ForwardRef;
