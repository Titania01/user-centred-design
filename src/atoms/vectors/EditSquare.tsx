import * as React from "react";
import { SVGProps } from "react";

type Props = { bg?: string; color?: string } & React.SVGProps<SVGSVGElement>;

const EditSquare = (props: Props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.19289 8.23753L13.5424 0.900204C14.746 -0.300068 16.6966 -0.300068 17.9001 0.900204L19.0972 2.09534C20.3009 3.29702 20.3009 5.246 19.0972 6.44638L11.7126 13.8188C11.1739 14.3566 10.4434 14.6589 9.68147 14.6589H5.99751C5.58297 14.6589 5.24985 14.3179 5.26015 13.9042L5.3526 10.1927C5.37114 9.45773 5.67186 8.75769 6.19289 8.23753ZM18.0542 3.13671L16.8576 1.94213C16.23 1.31624 15.2125 1.31624 14.5852 1.94185L13.9806 2.54543L17.4496 6.0086L18.0544 5.40474C18.6816 4.77924 18.6816 3.76316 18.0542 3.13671ZM16.4065 7.04996L12.9375 3.5868L7.23598 9.27889C6.98257 9.53189 6.83631 9.87236 6.8273 10.2296L6.75298 13.1853L9.68147 13.1862C10.0057 13.1862 10.3183 13.0736 10.567 12.8701L10.6695 12.7774L16.4065 7.04996ZM9.33481 0.0378978C9.74216 0.0378978 10.0724 0.367575 10.0724 0.774253C10.0724 1.14704 9.79491 1.45513 9.43489 1.50389L9.33481 1.51061H5.65773C3.17793 1.51061 1.5717 3.15289 1.47937 5.70324L1.47516 5.93758V14.1003C1.47516 16.7086 3.00328 18.4241 5.43426 18.5228L5.65773 18.5273H14.3356C16.8216 18.5273 18.4229 16.8885 18.515 14.335L18.5192 14.1003V10.1456C18.5192 9.73892 18.8494 9.40925 19.2567 9.40925C19.6301 9.40925 19.9387 9.68627 19.9876 10.0457L19.9943 10.1456V14.1003C19.9943 17.4994 17.8376 19.8894 14.5657 19.9963L14.3356 20H5.65773C2.33531 20 0.103228 17.6871 0.00348593 14.3358L0 14.1003V5.93758C0 2.54179 2.16225 0.148664 5.4281 0.0416392L5.65773 0.0378978H9.33481Z"
      fill="#200E32"
    />
  </svg>
);

export default EditSquare;