import * as React from "react";
import {SVGProps} from "react";

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.6667 5.33366H6.66675V1.33366C6.66675 1.15685 6.59651 0.987279 6.47149 0.862254C6.34646 0.73723 6.17689 0.666992 6.00008 0.666992C5.82327 0.666992 5.6537 0.73723 5.52868 0.862254C5.40365 0.987279 5.33341 1.15685 5.33341 1.33366V5.33366H1.33341C1.1566 5.33366 0.987035 5.4039 0.86201 5.52892C0.736986 5.65395 0.666748 5.82351 0.666748 6.00033C0.666748 6.17714 0.736986 6.34671 0.86201 6.47173C0.987035 6.59675 1.1566 6.66699 1.33341 6.66699H5.33341V10.667C5.33341 10.8438 5.40365 11.0134 5.52868 11.1384C5.6537 11.2634 5.82327 11.3337 6.00008 11.3337C6.17689 11.3337 6.34646 11.2634 6.47149 11.1384C6.59651 11.0134 6.66675 10.8438 6.66675 10.667V6.66699H10.6667C10.8436 6.66699 11.0131 6.59675 11.1382 6.47173C11.2632 6.34671 11.3334 6.17714 11.3334 6.00033C11.3334 5.82351 11.2632 5.65395 11.1382 5.52892C11.0131 5.4039 10.8436 5.33366 10.6667 5.33366Z"
      fill={props.color || "white"}
    />
  </svg>
);

export default PlusIcon;