import * as React from "react"
import { SVGProps } from "react"

const MaleAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path
      d="M0 20C0 8.954 8.954 0 20 0s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20Z"
      fill="#fff"
    />
    <path fill="url(#a)" d="M0 0h40v40H0z" />
    <path
      d="M20 39C9.507 39 1 30.493 1 20h-2c0 11.598 9.402 21 21 21v-2Zm19-19c0 10.493-8.507 19-19 19v2c11.598 0 21-9.402 21-21h-2ZM20 1c10.493 0 19 8.507 19 19h2C41 8.402 31.598-1 20-1v2Zm0-2C8.402-1-1 8.402-1 20h2C1 9.507 9.507 1 20 1v-2Z"
      fill="#FDFFFC"
    />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.00089)" />
      </pattern>
      <image
        id="b"
        width={1125}
        height={1125}
      />
    </defs>
  </svg>
)
export default MaleAvatar