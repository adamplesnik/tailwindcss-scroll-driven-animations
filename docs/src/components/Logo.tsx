import { HTMLAttributes } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const Logo = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      className={'overflow-visible' + addWithSpace(className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.819513 0.793601C1.34288 0.284475 2.05084 0 2.7872 0H18.5773C19.3137 0 20.0217 0.284475 20.545 0.793601C21.0687 1.30302 21.3645 1.99582 21.3645 2.72009V5.7922C21.3645 6.16335 21.0593 6.46422 20.6827 6.46422C20.3061 6.46422 20.0009 6.16335 20.0009 5.7922V2.72009C20.0009 2.358 19.8531 2.00893 19.5871 1.75018C19.3208 1.49113 18.9577 1.34405 18.5773 1.34405H2.7872C2.40681 1.34405 2.04376 1.49113 1.77747 1.75018C1.51148 2.00893 1.36369 2.358 1.36369 2.72009V12.9604C1.36369 13.7075 1.9974 14.3365 2.7872 14.3365H6.99791C7.37448 14.3365 7.67975 14.6374 7.67975 15.0085C7.67975 15.3797 7.37448 15.6805 6.99791 15.6805H2.7872C1.26111 15.6805 0 14.4663 0 12.9604V2.72009C0 1.99582 0.295845 1.30302 0.819513 0.793601Z"
        fill="url(#paint0_linear_21_89)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0144 9.40776C11.2964 9.48213 10.6 10.2891 10.7228 11.44L11.13 15.2591C11.2528 16.4101 12.1042 17.0567 12.8221 16.9823L19.332 16.3079C20.05 16.2336 20.7464 15.4266 20.6236 14.2757L20.2163 10.4566C20.0936 9.30564 19.2422 8.65903 18.5243 8.7334L12.0144 9.40776ZM9.36655 11.5805C9.18939 9.91916 10.1929 8.24499 11.8718 8.07108L18.3817 7.39672C20.0606 7.2228 21.3954 8.65474 21.5726 10.3161L21.9798 14.1352C22.157 15.7965 21.1535 17.4707 19.4746 17.6446L12.9647 18.319C11.2858 18.4929 9.95099 17.061 9.77382 15.3996L9.36655 11.5805Z"
        fill="url(#paint1_linear_21_89)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_21_89"
          x1="12.8987"
          y1="-3.82778"
          x2="6.46667"
          y2="27.5955"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#D946EF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_21_89"
          x1="12.8987"
          y1="-3.82778"
          x2="6.46667"
          y2="27.5955"
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
