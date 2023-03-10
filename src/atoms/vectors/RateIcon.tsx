import * as React from "react"
import { SVGProps } from "react"

const RateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
  width={28}
  height={28}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    d="M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12-5.373 12-12 12S2 20.627 2 14Z"
    fill="#8E59FF"
  />
  <path
    d="M12.757 8.562c.415-1.194 2.104-1.195 2.52 0l.63 1.813c.183.527.674.884 1.232.895l1.92.04c1.263.025 1.785 1.631.778 2.395l-1.53 1.16a1.333 1.333 0 0 0-.471 1.448l.556 1.838c.366 1.21-1 2.203-2.038 1.48l-1.576-1.096a1.334 1.334 0 0 0-1.523 0l-1.576 1.097c-1.037.722-2.404-.27-2.038-1.48l.556-1.838a1.333 1.333 0 0 0-.47-1.45l-1.53-1.159c-1.008-.764-.486-2.37.778-2.396l1.92-.039a1.333 1.333 0 0 0 1.232-.895l.63-1.813Z"
    fill="#FCFCFC"
  />
  <path
    d="M14 24C8.477 24 4 19.523 4 14H0c0 7.732 6.268 14 14 14v-4Zm10-10c0 5.523-4.477 10-10 10v4c7.732 0 14-6.268 14-14h-4ZM14 4c5.523 0 10 4.477 10 10h4c0-7.732-6.268-14-14-14v4Zm0-4C6.268 0 0 6.268 0 14h4C4 8.477 8.477 4 14 4V0Z"
    fill="#fff"
  />
</svg>
)

export default RateIcon
