import { HTMLAttributes } from 'react'

const Logo = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="21"
      viewBox="0 0 25 21"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.14401 1.11575C1.71496 0.560336 2.48728 0.25 3.29058 0.25H20.5162C21.3195 0.25 22.0918 0.560336 22.6628 1.11575C23.234 1.67148 23.5568 2.42726 23.5568 3.21737V6.56876C23.5568 6.97365 23.2238 7.30188 22.8129 7.30188C22.4021 7.30188 22.0691 6.97365 22.0691 6.56876V3.21737C22.0691 2.82236 21.9079 2.44156 21.6177 2.15928C21.3272 1.87668 20.9312 1.71623 20.5162 1.71623H3.29058C2.87561 1.71623 2.47956 1.87668 2.18906 2.15928C1.89888 2.44156 1.73767 2.82236 1.73767 3.21737V14.3887C1.73767 15.2036 2.42898 15.8898 3.29058 15.8898H7.88408C8.29489 15.8898 8.62791 16.218 8.62791 16.6229C8.62791 17.0278 8.29489 17.356 7.88408 17.356H3.29058C1.62576 17.356 0.25 16.0314 0.25 14.3887V3.21737C0.25 2.42726 0.57274 1.67148 1.14401 1.11575Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3566 10.513C12.5734 10.5941 11.8137 11.4744 11.9476 12.73L12.3919 16.8963C12.5258 18.1519 13.4546 18.8573 14.2378 18.7761L21.3395 18.0405C22.1227 17.9593 22.8824 17.079 22.7485 15.8235L22.3042 11.6572C22.1703 10.4016 21.2415 9.69621 20.4583 9.77735L13.3566 10.513ZM10.4681 12.8833C10.2748 11.0709 11.3696 9.24454 13.2011 9.05481L20.3028 8.31915C22.1343 8.12942 23.5904 9.69153 23.7837 11.5039L24.228 15.6702C24.4213 17.4826 23.3265 19.309 21.495 19.4987L14.3933 20.2343C12.5618 20.4241 11.1056 18.862 10.9124 17.0496L10.4681 12.8833Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Logo