import { HTMLAttributes } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const Logo = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={'overflow-visible' + addWithSpace(className)}
    >
      <path
        d="M7 19H5C3.34315 19 2 17.6569 2 16V6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V7"
        stroke="url(#paint0_linear_55_97)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="11"
        y="12.1498"
        width="11"
        height="9"
        rx="2"
        transform="rotate(-6 11 12.1498)"
        stroke="url(#paint1_linear_55_97)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_55_97"
          x1="14.5"
          y1="-2.86667"
          x2="10.9123"
          y2="25.5153"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#D946EF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_55_97"
          x1="17.4009"
          y1="8.6499"
          x2="12.8235"
          y2="27.3284"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#D946EF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo
