import * as React from "react";
import { SVGProps } from "react";

type Props = { bg?: string; color?: string } & React.SVGProps<SVGSVGElement>;

const ClockIcon = (props: Props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99987 1.33398C4.31772 1.33398 1.3332 4.31851 1.3332 8.00065C1.3332 11.6828 4.31772 14.6673 7.99987 14.6673C11.682 14.6673 14.6665 11.6828 14.6665 8.00065C14.6665 4.31851 11.682 1.33398 7.99987 1.33398ZM7.99987 2.33398C11.1297 2.33398 13.6665 4.87079 13.6665 8.00065C13.6665 11.1305 11.1297 13.6673 7.99987 13.6673C4.87001 13.6673 2.3332 11.1305 2.3332 8.00065C2.3332 4.87079 4.87001 2.33398 7.99987 2.33398ZM8.2697 5.16374C8.23659 4.91969 8.0274 4.73158 7.77427 4.73158C7.49812 4.73158 7.27427 4.95544 7.27427 5.23158V8.46292L7.27984 8.53741C7.30192 8.68411 7.38849 8.81499 7.51811 8.89232L10.0314 10.3916L10.092 10.4225C10.3186 10.5191 10.5873 10.4358 10.717 10.2184L10.7478 10.1578C10.8444 9.93125 10.7611 9.66254 10.5438 9.53285L8.274 8.17832L8.27427 5.23158L8.2697 5.16374Z"
      fill="#343535"
    />
  </svg>
);

export default ClockIcon;
